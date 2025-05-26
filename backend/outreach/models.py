# backend/outreach/models.py
from django.db import models

class OutreachProgram(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    contact_email = models.EmailField(blank=True)
    # …other fields as needed…

    def __str__(self):
        return self.title
