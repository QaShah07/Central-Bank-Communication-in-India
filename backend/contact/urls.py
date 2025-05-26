# backend/contact/urls.py
from rest_framework.routers import DefaultRouter
from django.urls import include, path
from .views import ContactSubmissionViewSet

router = DefaultRouter()
router.register(r'', ContactSubmissionViewSet)  # /api/contact/

urlpatterns = [
    path('', include(router.urls)),
]
