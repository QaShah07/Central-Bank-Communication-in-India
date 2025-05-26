# backend/outreach/serializers.py
from rest_framework import serializers
from .models import OutreachProgram

class OutreachProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutreachProgram
        fields = '__all__'
