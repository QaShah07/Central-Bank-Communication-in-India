# backend/team/urls.py
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import TeamMemberViewSet

router = DefaultRouter()
router.register(r'', TeamMemberViewSet)  # mounts at /api/team/

urlpatterns = [
    path('', include(router.urls)),
]
