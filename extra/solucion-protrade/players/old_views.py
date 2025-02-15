from datetime import date

from django.http import HttpRequest, JsonResponse

from shared.utils import get_json_fields, require_method, require_token, validate_json_body
from teams.models import Team

from .models import Player
from .serializers import PlayerSerializer


@require_method('GET')
def player_list(request: HttpRequest) -> JsonResponse:
    players = Player.objects.all()
    if position_query := request.GET.get('position'):
        players = players.filter(position=position_query)
    if team_query := request.GET.get('team'):
        players = players.filter(team__slug=team_query)
    serializer = PlayerSerializer(players, request=request)
    return serializer.json_response()


@require_method('GET')
def player_detail(request: HttpRequest, player_slug: str) -> JsonResponse:
    try:
        player = Player.objects.get(slug=player_slug)
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'}, status=404)
    serializer = PlayerSerializer(player, request=request)
    return serializer.json_response()


@require_method('POST')
@validate_json_body
@get_json_fields('name', 'slug', 'position', 'birth-date', 'market-value', 'team-slug')
@require_token
def add_player(request: HttpRequest):
    if request.data['position'] not in Player.Position:
        return JsonResponse({'error': 'Invalid position'}, status=400)
    
    try:
        birth_date = date.fromisoformat(request.data['birth-date'])
    except ValueError:
        return JsonResponse({'error': 'Invalid birth date'}, status=400)

    try:
        team = Team.objects.get(slug=request.data['team-slug'])
    except Team.DoesNotExist:
        return JsonResponse({'error': 'Team not found'}, status=404)
    
    if Player.objects.filter(slug=request.data['slug']).exists():
        return JsonResponse({'error': 'Player already exists'}, status=400)
    
    player = Player.objects.create(
        name=request.data['name'],
        slug=request.data['slug'],
        position=request.data['position'],
        birth_date=birth_date,
        market_value=request.data['market-value'],
        team=team,
    )

    return JsonResponse({'id': player.pk})


@require_method('POST')
@validate_json_body
@get_json_fields('player-slug', 'team-slug')
@require_token
def transfer_player(request: HttpRequest):
    try:
        player = Player.objects.get(slug=request.data['player-slug'])
    except Player.DoesNotExist:
        return JsonResponse({'error': 'Player not found'}, status=404)
    try:
        team = Team.objects.get(slug=request.data['team-slug'])
    except Team.DoesNotExist:
        return JsonResponse({'error': 'Team not found'}, status=404)
    resolution = player.transfer_team(team)
    return JsonResponse(resolution)
