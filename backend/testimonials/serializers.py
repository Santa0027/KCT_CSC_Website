from rest_framework import serializers
from .models import StudentReview

class StudentReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentReview
        fields = '__all__'
