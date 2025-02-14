import pytest
from django.contrib.auth.models import User
from model_bakery import baker


@pytest.fixture
def user():
    return baker.make(User, _fill_optional=True)


@pytest.fixture
def token():
    return baker.make('users.Token', _fill_optional=True)


@pytest.fixture
def team():
    return baker.make('teams.Team', _fill_optional=True)


@pytest.fixture
def player():
    return baker.make('players.Player', _fill_optional=True)
