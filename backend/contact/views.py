# backend/contact/views.py

from rest_framework import status, generics
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer
from .google_sheets import append_submission_to_sheet

class ContactSubmissionCreateAPIView(generics.CreateAPIView):
    """
    POST endpoint that:
      1) creates a new ContactSubmission in the DB
      2) appends the same data to Google Sheets
    """
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    def create(self, request, *args, **kwargs):
        # 1) Use serializer to validate & save
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        submission = serializer.save()  # this is the ContactSubmission instance

        # 2) Append to Google Sheet (we do this _after_ saving to the DB)
        try:
            append_submission_to_sheet(submission)
        except Exception as e:
            # Log the exception, but do NOT block the API response
            # (we still respond with success, but the sheet might be out of sync)
            import logging
            logger = logging.getLogger(__name__)
            logger.error(f"Failed to append to Google Sheet: {e}")

        # 3) Return the newly created object data
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
