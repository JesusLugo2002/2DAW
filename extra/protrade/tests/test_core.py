import re

import pytest
from django.conf import settings
from model_bakery import baker

from players.models import Player
from teams.models import Team
from users.models import Token


@pytest.mark.django_db
def test_required_apps_are_installed():
    PROPER_APPS = ('shared', 'teams', 'players', 'users')

    custom_apps = [app for app in settings.INSTALLED_APPS if not app.startswith('django')]
    for app in PROPER_APPS:
        app_config = f'{app}.apps.{app.title()}Config'
        assert app_config in custom_apps, (
            f'La aplicación <{app}> no está "creada/instalada" en el proyecto.'
        )
    assert len(custom_apps) >= len(PROPER_APPS), (
        'El número de aplicaciones propias definidas en el proyecto no es correcto.'
    )


@pytest.mark.django_db
def test_team_model_has_proper_fields():
    PROPER_FIELDS = (
        'name',
        'slug',
        'league',
        'shield',
    )
    for field in PROPER_FIELDS:
        assert getattr(Team, field) is not None, f'El campo <{field}> no está en el modelo Team.'


@pytest.mark.django_db
def test_player_model_has_proper_fields():
    PROPER_FIELDS = ('name', 'slug', 'position', 'birth_date', 'market_value', 'photo', 'team')
    for field in PROPER_FIELDS:
        assert getattr(Player, field) is not None, (
            f'El campo <{field}> no está en el modelo Player.'
        )


@pytest.mark.django_db
def test_model_enum_choices():
    choices = Team.league.field.choices
    assert choices == [
        ('L', 'Laliga'),
        ('P', 'Premier'),
        ('C', 'Calcio'),
        ('B', 'Bundesliga'),
    ], 'Las opciones del campo league(Team) no son correctas.'

    choices = Player.position.field.choices
    assert choices == [
        ('G', 'Goalkeeper'),
        ('D', 'Defender'),
        ('M', 'Midfielder'),
        ('F', 'Forward'),
    ], 'Las opciones del campo position(Player) no son correctas.'


@pytest.mark.django_db
def test_model_default_values():
    team = baker.make(Team)
    assert team.shield == 'teams/shields/default.png'
    player = baker.make(Player)
    assert player.photo == 'players/photos/default.png'
    token = baker.make(Token)
    assert re.fullmatch(r'[a-f0-9\-]+', str(token.key), re.IGNORECASE)


@pytest.mark.django_db
def test_models_are_available_on_admin(admin_client):
    MODELS = (
        'teams.Team',
        'players.Player',
        'users.Token',
    )

    for model in MODELS:
        url_model_path = model.replace('.', '/').lower()
        url = f'/admin/{url_model_path}/'
        response = admin_client.get(url)
        assert response.status_code == 200, f'El modelo <{model}> no está habilitado en el admin.'
