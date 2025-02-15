from datetime import datetime
from urllib.parse import urljoin

BASE_URL = 'http://testserver/'


def build_url(url: str) -> str:
    return urljoin(BASE_URL, url)


def datetime_isoformats_are_close(dtiso1: str, dtiso2: str = '') -> bool:
    dt1 = datetime.fromisoformat(dtiso1)
    dt2 = datetime.fromisoformat(dtiso2) if dtiso2 else datetime.now()
    return abs((dt1 - dt2).total_seconds()) < 1


def compare_teams(rteam, eteam) -> None:
    # rteam: response-team
    # eteam: expected-team
    assert rteam['id'] == eteam.pk
    assert rteam['name'] == eteam.name
    assert rteam['slug'] == eteam.slug
    assert rteam['league'] == eteam.get_league_display()
    assert rteam['shield'] == build_url(eteam.shield.url)


def compare_players(rplayer, eplayer) -> None:
    # rplayer: response-player
    # eplayer: expected-player
    assert rplayer['id'] == eplayer.pk
    assert rplayer['name'] == eplayer.name
    assert rplayer['slug'] == eplayer.slug
    assert rplayer['position'] == eplayer.get_position_display()
    assert rplayer['birth_date'] == eplayer.birth_date.isoformat()
    assert rplayer['market_value'] == float(eplayer.market_value)
    assert rplayer['photo'] == build_url(eplayer.photo.url)
    compare_teams(rplayer['team'], eplayer.team)


def get_json(client, url: str, bearer_token: str = '') -> tuple:
    headers = {'Authorization': f'Bearer {bearer_token}'} if bearer_token else {}
    response = client.get(url, headers=headers)
    return response.status_code, response.json()


def post_json(client, url: str, data: dict = {}, bearer_token: str = '') -> tuple:
    headers = {'Authorization': f'Bearer {bearer_token}'} if bearer_token else {}
    response = client.post(url, data, content_type='application/json', headers=headers)
    return response.status_code, response.json()
