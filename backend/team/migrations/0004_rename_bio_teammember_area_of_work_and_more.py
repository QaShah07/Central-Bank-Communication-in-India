# Generated by Django 5.2.1 on 2025-05-29 07:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0003_teammember_linkedin_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teammember',
            old_name='bio',
            new_name='area_of_work',
        ),
        migrations.RenameField(
            model_name='teammember',
            old_name='linkedin_url',
            new_name='profile_url',
        ),
    ]
