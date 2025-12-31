from rest_framework import viewsets
from .models import StudentReview
from .serializers import StudentReviewSerializer

class StudentReviewViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StudentReview.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = StudentReviewSerializer
