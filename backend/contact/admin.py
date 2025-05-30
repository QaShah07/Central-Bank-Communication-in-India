# backend/contact/admin.py

from django.contrib import admin
from .models import ContactSubmission

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'institute_name',
        'email',
        'purpose_of_contact',
        'submitted_on',
    )
    list_filter = ('purpose_of_contact', 'submitted_on')
    search_fields = ('name', 'email', 'institute_name')
    ordering = ('-submitted_on',)
