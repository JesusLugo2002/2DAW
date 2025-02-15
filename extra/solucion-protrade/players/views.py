from datetime import date
from decimal import Decimal
import json
from django.http import HttpRequest, JsonResponse

from teams.models import Team

from .models import Player
from .serializers import PlayerSerializer


def player_list(request: HttpRequest) -> JsonResponse:
    players = Player.objects.all()
    if position_query := request.GET.get('position'):
        players = players.filter(position=position_query)
    if team_query := request.GET.get('team'):
        players = players.filter(team__slug=team_query)
    serializer = PlayerSerializer(players, request=request)
    return serializer.json_response()


def player_detail(request: HttpRequest, player_slug: str):
    player = Player.objects.get(slug=player_slug)
    serializer = PlayerSerializer(player, request=request)
    return serializer.json_response()


def add_player(request: HttpRequest):
    json_data = json.loads(request.body)
    team = Team.objects.get(slug=json_data['team-slug'])
    birth_date = date.fromisoformat(json_data['birth-date'])
    player = Player.objects.create(
        name=json_data['name'],
        slug=json_data['slug'],
        position=json_data['position'],
        birth_date=birth_date,
        market_value=json_data['market-value'],
        team=team,
    )
    return JsonResponse({'id': player.pk})


def transfer_player(request: HttpRequest):
    json_data = json.loads(request.body)
    player = Player.objects.get(slug=json_data['player-slug'])
    new_team = Team.objects.get(slug=json_data['team-slug'])
    if player.team.league != new_team.league:
        player.market_value += player.market_value * Decimal(0.1)
    player.team = new_team
    player.save()
    return JsonResponse({'id': player.pk})