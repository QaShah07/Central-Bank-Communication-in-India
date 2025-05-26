# backend/outreach/views.py
from rest_framework import viewsets
from .models import OutreachProgram
from .serializers import OutreachProgramSerializer

class OutreachProgramViewSet(viewsets.ModelViewSet):
    queryset = OutreachProgram.objects.all().order_by('-date')
    serializer_class = OutreachProgramSerializer
