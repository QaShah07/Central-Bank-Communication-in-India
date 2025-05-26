# backend/contact/views.py
from rest_framework import viewsets
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

class ContactSubmissionViewSet(viewsets.ModelViewSet):
    queryset = ContactSubmission.objects.all().order_by('-submitted_on')
    serializer_class = ContactSubmissionSerializer
