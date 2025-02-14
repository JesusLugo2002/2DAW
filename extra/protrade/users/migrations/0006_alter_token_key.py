# Generated by Django 5.1.6 on 2025-02-12 19:01

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_token_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='key',
            field=models.UUIDField(default=uuid.UUID('4c4156b7-ffb2-420c-923c-191218acc161'), unique=True),
        ),
    ]
