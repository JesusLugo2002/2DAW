from decimal import Decimal

from django.db import models


class Player(models.Model):
    class Position(models.TextChoices):
        GOALKEEPER = 'G'
        DEFENDER = 'D'
        MIDFIELDER = 'M'
        FORWARD = 'F'

    name = models.CharField(unique=True, max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    position = models.CharField(choices=Position, max_length=1)
    birth_date = models.DateField()
    market_value = models.DecimalField(max_digits=11, decimal_places=2)
    photo = models.ImageField(
        null=True, blank=True, upload_to='players/photos', default='players/photos/default.png'
    )
    team = models.ForeignKey(
        'teams.Team', on_delete=models.CASCADE, related_name='players', null=True, blank=True
    )

    def transfer_team(self, new_team) -> dict:
        INCREASE_PORCENTAGE = Decimal(0.1)
        if self.team.league != new_team.league:
            self.market_value += self.market_value * INCREASE_PORCENTAGE
        self.team = new_team
        self.save()
        return {'id': self.pk}
