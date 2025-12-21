from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

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

from .serializers import (
    CourseListSerializer,
    CourseDetailSerializer,
    CourseImageSerializer,
    CourseModeSerializer,
    WhyChooseSerializer,
    CourseHighlightSerializer,
    IdealForSerializer,
    CareerOpportunitySerializer,
    CurriculumSerializer,
    CurriculumTopicSerializer,
    CourseFAQSerializer,
)

# =====================================================
# COURSE APIs
# =====================================================

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseListSerializer


class CourseDetailView(generics.RetrieveAPIView):
    queryset = (
        Course.objects.filter(is_active=True)
        .prefetch_related(
            "images",
            "modes",
            "why_choose",
            "highlights",
            "ideal_for",
            "careers",
            "curriculum__topics",
        )
    )
    serializer_class = CourseDetailSerializer
    lookup_field = "slug"


# =====================================================
# COURSE IMAGE APIs
# =====================================================

class CourseImageListView(generics.ListAPIView):
    serializer_class = CourseImageSerializer

    def get_queryset(self):
        return CourseImage.objects.filter(
            course__slug=self.kwargs["slug"]
        ).order_by("order")


# =====================================================
# COURSE MODE APIs
# =====================================================

class CourseModeListView(generics.ListAPIView):
    serializer_class = CourseModeSerializer

    def get_queryset(self):
        return CourseMode.objects.filter(
            course__slug=self.kwargs["slug"]
        )


# =====================================================
# WHY CHOOSE APIs
# =====================================================

class WhyChooseListView(generics.ListAPIView):
    serializer_class = WhyChooseSerializer

    def get_queryset(self):
        return WhyChoose.objects.filter(
            course__slug=self.kwargs["slug"]
        )


# =====================================================
# COURSE HIGHLIGHT APIs
# =====================================================

class CourseHighlightListView(generics.ListAPIView):
    serializer_class = CourseHighlightSerializer

    def get_queryset(self):
        return CourseHighlight.objects.filter(
            course__slug=self.kwargs["slug"]
        )


# =====================================================
# IDEAL FOR APIs
# =====================================================

class IdealForListView(generics.ListAPIView):
    serializer_class = IdealForSerializer

    def get_queryset(self):
        return IdealFor.objects.filter(
            course__slug=self.kwargs["slug"]
        )


# =====================================================
# CAREER OPPORTUNITY APIs
# =====================================================

class CareerOpportunityListView(generics.ListAPIView):
    serializer_class = CareerOpportunitySerializer

    def get_queryset(self):
        return CareerOpportunity.objects.filter(
            course__slug=self.kwargs["slug"]
        )


# =====================================================
# CURRICULUM APIs
# =====================================================

class CurriculumListView(generics.ListAPIView):
    serializer_class = CurriculumSerializer

    def get_queryset(self):
        return Curriculum.objects.filter(
            course__slug=self.kwargs["slug"]
        ).prefetch_related("topics").order_by("order")


class CurriculumTopicListView(generics.ListAPIView):
    serializer_class = CurriculumTopicSerializer

    def get_queryset(self):
        return CurriculumTopic.objects.filter(
            curriculum_id=self.kwargs["curriculum_id"]
        )


# =====================================================
# FULL COURSE DATA (SINGLE API CALL)
# =====================================================

class CourseFullDataView(APIView):
    def get(self, request, slug):
        course = Course.objects.prefetch_related(
            "images",
            "modes",
            "why_choose",
            "highlights",
            "ideal_for",
            "careers",
            "curriculum__topics",
        ).get(slug=slug, is_active=True)

        serializer = CourseDetailSerializer(course)
        return Response(serializer.data)


class CourseFAQListView(generics.ListAPIView):
    serializer_class = CourseFAQSerializer

    def get_queryset(self):
        return CourseFAQ.objects.filter(
            course__slug=self.kwargs["slug"],
            is_active=True
        ).order_by("order")

