# backend/contact/serializers.py

from rest_framework import serializers
from .models import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = [
            'id',
            'name',
            'institute_name',
            'email',
            'purpose_of_contact',
            'submitted_on',
        ]
        read_only_fields = ['id', 'submitted_on']
