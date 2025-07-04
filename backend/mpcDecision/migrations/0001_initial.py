# Generated by Django 5.2.1 on 2025-06-07 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MPCDecision',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(help_text='Date of the MPC meeting')),
                ('policy_change', models.CharField(choices=[('rate_hike', 'Rate Hike'), ('rate_cut', 'Rate Cut'), ('rate_hold', 'Rate Hold')], help_text='Type of policy change: Rate Hike, Rate Cut, or Rate Hold', max_length=20)),
                ('voting_pattern', models.CharField(help_text='Voting pattern, e.g. "6-0 (Unanimous)" or "5-1 (Majority)"', max_length=50)),
                ('explicit_dissenter', models.CharField(help_text='Format: "6:0 NA", "6:1 OneName", or "6:2 TwoName,AnotherName"', max_length=100)),
                ('implicit_dissent_score', models.CharField(help_text='Format: "0 to 1 VADER", "0 to 1 finBERT","0 to 1 Centrab Bank RoBERTA", or "6:2 TwoName,AnotherName"', max_length=100)),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
    ]
