from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentReviewViewSet

router = DefaultRouter()
router.register(r'reviews', StudentReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
