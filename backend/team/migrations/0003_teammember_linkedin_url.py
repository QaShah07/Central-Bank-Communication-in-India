# Generated by Django 5.2.1 on 2025-05-28 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0002_teammember_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='teammember',
            name='linkedin_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]
