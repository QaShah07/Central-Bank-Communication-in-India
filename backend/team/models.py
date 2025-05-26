# backend/team/models.py
from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='team_photos/')  # store images in media/team_photos/
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.name
