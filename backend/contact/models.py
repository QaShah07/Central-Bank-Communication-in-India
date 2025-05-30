# backend/contact/models.py

from django.db import models

PURPOSE_CHOICES = [
    ('general_inquiry', 'General Inquiry'),
    ('collaboration',     'Collaboration'),
    ('job_opportunity',   'Job Opportunity'),
    ('other',             'Other'),
]

class ContactSubmission(models.Model):
    name = models.CharField(max_length=200)
    institute_name = models.CharField(max_length=250, default="", blank=True)
    email = models.EmailField()
    purpose_of_contact = models.CharField(
        max_length=50,
        choices=PURPOSE_CHOICES,
        default='general_inquiry',  # ← this gives every existing row a default
    )
    submitted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} – {self.email} ({self.purpose_of_contact})"
