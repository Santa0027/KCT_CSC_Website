from django.urls import path
from .views import (
    CourseListView,
    CourseDetailView,
    CourseImageListView,
    CourseModeListView,
    WhyChooseListView,
    CourseHighlightListView,
    IdealForListView,
    CareerOpportunityListView,
    CurriculumListView,
    CurriculumTopicListView,
    CourseFullDataView,
)

urlpatterns = [
    # =========================
    # COURSE MAIN APIs
    # =========================
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("courses/<slug:slug>/", CourseDetailView.as_view(), name="course-detail"),

    # =========================
    # COURSE SECTION APIs
    # =========================
    path("courses/<slug:slug>/images/", CourseImageListView.as_view(), name="course-images"),
    path("courses/<slug:slug>/modes/", CourseModeListView.as_view(), name="course-modes"),
    path("courses/<slug:slug>/why-choose/", WhyChooseListView.as_view(), name="course-why-choose"),
    path("courses/<slug:slug>/highlights/", CourseHighlightListView.as_view(), name="course-highlights"),
    path("courses/<slug:slug>/ideal-for/", IdealForListView.as_view(), name="course-ideal-for"),
    path("courses/<slug:slug>/careers/", CareerOpportunityListView.as_view(), name="course-careers"),

    # =========================
    # CURRICULUM APIs
    # =========================
    path("courses/<slug:slug>/curriculum/", CurriculumListView.as_view(), name="course-curriculum"),
    path(
        "curriculum/<int:curriculum_id>/topics/",
        CurriculumTopicListView.as_view(),
        name="curriculum-topics",
    ),

    # =========================
    # FULL COURSE DATA (ONE CALL)
    # =========================
    path(
        "courses/<slug:slug>/full/",
        CourseFullDataView.as_view(),
        name="course-full-data",
    ),
]
