from rest_framework import serializers
from .models import (
    Course,
    CourseImage,
    CourseMode,
    WhyChoose,
    CourseHighlight,
    IdealFor,
    CareerOpportunity,
    Curriculum,
    CurriculumTopic,
    CourseFAQ,
)

# -------------------
# Child Serializers
# -------------------

class CourseFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseFAQ
        fields = ["id", "question", "answer", "order"]

class CourseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseImage
        fields = ["id", "image", "alt_text", "order"]

class CourseModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseMode
        fields = ["id", "mode"]

class WhyChooseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChoose
        fields = ["id", "title", "description"]

class CourseHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseHighlight
        fields = ["id", "text"]

class IdealForSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdealFor
        fields = ["id", "text"]

class CareerOpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerOpportunity
        fields = ["id", "role"]

class CurriculumTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurriculumTopic
        fields = ["id", "title"]

class CurriculumSerializer(serializers.ModelSerializer):
    topics = CurriculumTopicSerializer(many=True, read_only=True)

    class Meta:
        model = Curriculum
        fields = ["id", "title", "order", "topics"]

# -------------------
# Main Course Serializer
# -------------------

class CourseDetailSerializer(serializers.ModelSerializer):
    images = CourseImageSerializer(many=True, read_only=True)
    modes = CourseModeSerializer(many=True, read_only=True)
    why_choose = WhyChooseSerializer(many=True, read_only=True)
    highlights = CourseHighlightSerializer(many=True, read_only=True)
    ideal_for = IdealForSerializer(many=True, read_only=True)
    careers = CareerOpportunitySerializer(many=True, read_only=True)
    curriculum = CurriculumSerializer(many=True, read_only=True)
    faqs = CourseFAQSerializer(many=True, read_only=True)  # ✅ FIXED

    class Meta:
        model = Course
        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "long_description",
            "duration",
            "price",
            "discount",
            "breakdown",
            "images",
            "modes",
            "why_choose",
            "highlights",
            "ideal_for",
            "careers",
            "curriculum",
            "faqs",  # ✅ FIXED
        ]

# -------------------
# Course List Serializer
# -------------------

class CourseListSerializer(serializers.ModelSerializer):
    images = CourseImageSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = ["id", "title", "slug", "short_description", "duration","price","discount","images",]
