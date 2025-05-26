# backend/outreach/urls.py
from rest_framework.routers import DefaultRouter
from django.urls import include, path
from .views import OutreachProgramViewSet

router = DefaultRouter()
router.register(r'', OutreachProgramViewSet)  # /api/outreach/

urlpatterns = [
    path('', include(router.urls)),
]
