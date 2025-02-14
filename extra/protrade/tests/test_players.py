import uuid

import pytest
from model_bakery import baker

from players.models import Player
from teams.models import Team

from .helpers import compare_players, get_json, post_json

# ==============================================================================
# PLAYER LIST
# ==============================================================================


@pytest.mark.django_db
def test_player_list(client):
    baker.make(Player, _fill_optional=True, _quantity=10)
    players = Player.objects.all()
    status, response = get_json(client, '/api/players/')
    assert status == 200
    for player in response:
        compare_players(player, players.get(pk=player['id']))


@pytest.mark.django_db
def test_player_list_fails_when_method_is_not_allowed(client):
    status, response = post_json(client, '/api/players/')
    assert status == 405
    assert response == {'error': 'Method not allowed'}


# ==============================================================================
# PLAYER LIST WITH QUERYSTRING FILTER
# ==============================================================================


@pytest.mark.django_db
def test_player_list_with_querystring_filter(client, player):
    baker.make(Player, _fill_optional=True, _quantity=10)
    status, response = get_json(
        client, f'/api/players/?position={player.position}&team={player.team.slug}'
    )
    assert status == 200
    assert len(response) == 1
    compare_players(response[0], player)


@pytest.mark.django_db
def test_player_list_with_querystring_filter_fails_when_method_is_not_allowed(client):
    status, response = post_json(client, '/api/players/?position=d&team=test-fc')
    assert status == 405
    assert response == {'error': 'Method not allowed'}


# ==============================================================================
# PLAYER DETAIL
# ==============================================================================


@pytest.mark.django_db
def test_player_detail(client, player):
    status, response = get_json(client, f'/api/players/{player.slug}/')
    assert status == 200
    compare_players(response, player)


@pytest.mark.django_db
def test_player_detail_fails_when_method_is_not_allowed(client):
    status, response = post_json(client, '/api/players/test/')
    assert status == 405
    assert response == {'error': 'Method not allowed'}


@pytest.mark.django_db
def test_player_detail_fails_when_player_does_not_exist(client):
    status, response = get_json(client, '/api/players/test/')
    assert status == 404
    assert response == {'error': 'Player not found'}


# ==============================================================================
# ADD PLAYER
# ==============================================================================


@pytest.mark.django_db
def test_add_player(client, team, token):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'G',
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': team.slug,
    }
    status, response = post_json(client, '/api/players/add/', player_data, token.key)
    print(response)
    assert status == 200
    assert response == {'id': 1}
    assert Player.objects.get(slug=player_data['slug'])


@pytest.mark.django_db
def test_add_player_fails_when_method_is_not_allowed(client):
    status, response = get_json(client, '/api/players/add/')
    assert status == 405
    assert response == {'error': 'Method not allowed'}


@pytest.mark.django_db
def test_add_player_fails_when_invalid_json(client):
    status, response = post_json(client, '/api/players/add/', '{')
    assert status == 400
    assert response == {'error': 'Invalid JSON body'}


@pytest.mark.django_db
def test_add_player_fails_when_missing_required_fields(client):
    status, response = post_json(client, '/api/players/add/', {})
    assert status == 400
    assert response == {'error': 'Missing required fields'}


@pytest.mark.django_db
def test_add_player_fails_when_invalid_token(client):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'G',
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': 'test-fc',
    }
    status, response = post_json(client, '/api/players/add/', player_data, 'invalid-token')
    assert status == 400
    assert response == {'error': 'Invalid authentication token'}


@pytest.mark.django_db
def test_add_player_fails_when_unregistered_token(client):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'G',
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': 'test-fc',
    }
    status, response = post_json(client, '/api/players/add/', player_data, str(uuid.uuid4()))
    assert status == 401
    assert response == {'error': 'Unregistered authentication token'}


@pytest.mark.django_db
def test_add_player_fails_when_invalid_position(client, token):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'X',
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': 'test-fc',
    }
    status, response = post_json(client, '/api/players/add/', player_data, token.key)
    assert status == 400
    assert response == {'error': 'Invalid position'}


@pytest.mark.django_db
def test_add_player_fails_when_invalid_birth_date(client, token):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'G',
        'birth-date': '01-01-1990',
        'market-value': 10,
        'team-slug': 'test-fc',
    }
    status, response = post_json(client, '/api/players/add/', player_data, token.key)
    assert status == 400
    assert response == {'error': 'Invalid birth date'}


@pytest.mark.django_db
def test_add_player_fails_when_team_does_not_exist(client, token):
    player_data = {
        'name': 'Test Player',
        'slug': 'test-player',
        'position': 'G',
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': 'test-fc',
    }
    status, response = post_json(client, '/api/players/add/', player_data, token.key)
    assert status == 404
    assert response == {'error': 'Team not found'}


@pytest.mark.django_db
def test_add_player_fails_when_player_already_exists(client, player, token):
    player_data = {
        'name': player.name,
        'slug': player.slug,
        'position': player.position,
        'birth-date': '1990-01-01',
        'market-value': 10,
        'team-slug': player.team.slug,
    }
    status, response = post_json(client, '/api/players/add/', player_data, token.key)
    assert status == 400
    assert response == {'error': 'Player already exists'}


# ==============================================================================
# DELETE PLAYER
# ==============================================================================


# @pytest.mark.django_db
# def test_delete_player(client, player, token):
#     player_data = {'slug': player.slug}
#     status, response = post_json(client, '/api/players/delete/', player_data, token.key)
#     assert status == 200
#     assert response == {'id': player.pk}
#     assert not Player.objects.filter(slug=player.slug)


# @pytest.mark.django_db
# def test_delete_player_fails_when_method_is_not_allowed(client):
#     status, response = get_json(client, '/api/players/delete/')
#     assert status == 405
#     assert response == {'error': 'Method not allowed'}


# @pytest.mark.django_db
# def test_delete_player_fails_when_invalid_json(client):
#     status, response = post_json(client, '/api/players/delete/', '{')
#     assert status == 400
#     assert response == {'error': 'Invalid JSON body'}


# @pytest.mark.django_db
# def test_delete_player_fails_when_missing_required_fields(client):
#     status, response = post_json(client, '/api/players/delete/', {})
#     assert status == 400
#     assert response == {'error': 'Missing required fields'}


# @pytest.mark.django_db
# def test_delete_player_fails_when_invalid_token(client):
#     player_data = {'slug': 'test-player'}
#     status, response = post_json(client, '/api/players/delete/', player_data, 'invalid-token')
#     assert status == 400
#     assert response == {'error': 'Invalid authentication token'}


# @pytest.mark.django_db
# def test_delete_player_fails_when_unregistered_token(client):
#     player_data = {'slug': 'test-player'}
#     status, response = post_json(client, '/api/players/delete/', player_data, str(uuid.uuid4()))
#     assert status == 401
#     assert response == {'error': 'Unregistered authentication token'}


# @pytest.mark.django_db
# def test_delete_player_fails_when_player_does_not_exist(client, token):
#     player_data = {'slug': 'test-player'}
#     status, response = post_json(client, '/api/players/delete/', player_data, token.key)
#     assert status == 400
#     assert response == {'error': 'Player not found'}


# ==============================================================================
# TRANSFER PLAYER
# ==============================================================================


@pytest.mark.django_db
def test_transfer_player(client, player, team, token):
    player_data = {'player-slug': player.slug, 'team-slug': team.slug}
    status, response = post_json(client, '/api/players/transfer/', player_data, token.key)
    assert status == 200
    assert response == {'id': player.pk}
    assert Player.objects.get(slug=player.slug).team == team


@pytest.mark.django_db
def test_transfer_player_update_market_value(client, player, team, token):
    player.market_value = 10
    leagues, i = Team.League.choices, 0
    while player.team.league == team.league:
        player.team.league = leagues[i]
        i += 1
    player.team.save()
    player.save()
    player_data = {'player-slug': player.slug, 'team-slug': team.slug}
    status, response = post_json(client, '/api/players/transfer/', player_data, token.key)
    assert status == 200
    assert response == {'id': player.pk}
    assert (player := Player.objects.get(slug=player.slug)).team == team
    assert float(player.market_value) == 11


@pytest.mark.django_db
def test_transfer_player_does_not_update_market_value(client, player, team, token):
    player.market_value = 10
    player.team.league = team.league
    player.team.save()
    player.save()
    player_data = {'player-slug': player.slug, 'team-slug': team.slug}
    status, response = post_json(client, '/api/players/transfer/', player_data, token.key)
    assert status == 200
    assert response == {'id': player.pk}
    assert (player := Player.objects.get(slug=player.slug)).team == team
    assert float(player.market_value) == 10


@pytest.mark.django_db
def test_transfer_player_fails_when_method_is_not_allowed(client):
    status, response = get_json(client, '/api/players/transfer/')
    assert status == 405
    assert response == {'error': 'Method not allowed'}


@pytest.mark.django_db
def test_transfer_player_fails_when_invalid_json(client):
    status, response = post_json(client, '/api/players/transfer/', '{')
    assert status == 400
    assert response == {'error': 'Invalid JSON body'}


@pytest.mark.django_db
def test_transfer_player_fails_when_missing_required_fields(client):
    status, response = post_json(client, '/api/players/transfer/', {})
    assert status == 400
    assert response == {'error': 'Missing required fields'}


@pytest.mark.django_db
def test_transfer_player_fails_when_invalid_token(client):
    player_data = {'player-slug': 'test-player', 'team-slug': 'test-fc'}
    status, response = post_json(client, '/api/players/transfer/', player_data, 'invalid-token')
    assert status == 400
    assert response == {'error': 'Invalid authentication token'}


@pytest.mark.django_db
def test_transfer_player_fails_when_unregistered_token(client):
    player_data = {'player-slug': 'test-player', 'team-slug': 'test-fc'}
    status, response = post_json(client, '/api/players/transfer/', player_data, str(uuid.uuid4()))
    assert status == 401
    assert response == {'error': 'Unregistered authentication token'}


@pytest.mark.django_db
def test_transfer_player_fails_when_player_does_not_exist(client, token):
    player_data = {'player-slug': 'test-player', 'team-slug': 'test-fc'}
    status, response = post_json(client, '/api/players/transfer/', player_data, token.key)
    assert status == 404
    assert response == {'error': 'Player not found'}


@pytest.mark.django_db
def test_transfer_player_fails_when_team_does_not_exist(client, player, token):
    player_data = {'player-slug': player.slug, 'team-slug': 'test-fc'}
    status, response = post_json(client, '/api/players/transfer/', player_data, token.key)
    assert status == 404
    assert response == {'error': 'Team not found'}
