# Generated by Django 5.1.6 on 2025-02-12 20:22

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_token_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='key',
            field=models.UUIDField(default=uuid.UUID('6ccce734-e671-4fcf-ae9e-7be1dbd846c0'), unique=True),
        ),
    ]
