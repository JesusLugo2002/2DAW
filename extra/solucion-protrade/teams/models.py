from django.db import models


class Team(models.Model):
    class League(models.TextChoices):
        LALIGA = 'L'
        PREMIER = 'P'
        CALCIO = 'C'
        BUNDESLIGA = 'B'

    name = models.CharField(unique=True, max_length=200)
    slug = models.SlugField(unique=True, max_length=200)
    league = models.CharField(choices=League, max_length=1)
    shield = models.ImageField(
        null=True, blank=True, upload_to='teams/shields', default='teams/shields/default.png'
    )
