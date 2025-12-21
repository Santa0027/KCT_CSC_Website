from django.contrib import admin
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

# ==========================
# Inline Admins (Course Children)
# ==========================

class CourseImageInline(admin.TabularInline):
    model = CourseImage
    extra = 1
    ordering = ["order"]


class CourseModeInline(admin.TabularInline):
    model = CourseMode
    extra = 1


class WhyChooseInline(admin.TabularInline):
    model = WhyChoose
    extra = 1


class CourseHighlightInline(admin.TabularInline):
    model = CourseHighlight
    extra = 1


class IdealForInline(admin.TabularInline):
    model = IdealFor
    extra = 1


class CareerOpportunityInline(admin.TabularInline):
    model = CareerOpportunity
    extra = 1


class CurriculumInline(admin.TabularInline):
    model = Curriculum
    extra = 1
    ordering = ["order"]


class CourseFAQInline(admin.TabularInline):
    model = CourseFAQ
    extra = 1
    ordering = ["order"]


# ==========================
# Course Admin (MAIN)
# ==========================

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "duration",
        "is_active",
        "created_at",
    )
    list_filter = ("is_active", "created_at")
    search_fields = ("title", "short_description", "long_description")
    prepopulated_fields = {"slug": ("title",)}
    ordering = ("-created_at",)

    inlines = [
        CourseImageInline,
        CourseModeInline,
        WhyChooseInline,
        CourseHighlightInline,
        IdealForInline,
        CareerOpportunityInline,
        CurriculumInline,
        CourseFAQInline,
    ]


# ==========================
# Curriculum → Topics (Separate Admin)
# ==========================

class CurriculumTopicInline(admin.TabularInline):
    model = CurriculumTopic
    extra = 1


@admin.register(Curriculum)
class CurriculumAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "order")
    list_filter = ("course",)
    ordering = ("course", "order")
    inlines = [CurriculumTopicInline]


# ==========================
# Standalone Admins (Optional)
# ==========================

@admin.register(CourseImage)
class CourseImageAdmin(admin.ModelAdmin):
    list_display = ("course", "order")
    ordering = ("course", "order")


@admin.register(CourseMode)
class CourseModeAdmin(admin.ModelAdmin):
    list_display = ("course", "mode")


@admin.register(WhyChoose)
class WhyChooseAdmin(admin.ModelAdmin):
    list_display = ("course", "title")


@admin.register(CourseHighlight)
class CourseHighlightAdmin(admin.ModelAdmin):
    list_display = ("course", "text")


@admin.register(IdealFor)
class IdealForAdmin(admin.ModelAdmin):
    list_display = ("course", "text")


@admin.register(CareerOpportunity)
class CareerOpportunityAdmin(admin.ModelAdmin):
    list_display = ("course", "role")


@admin.register(CurriculumTopic)
class CurriculumTopicAdmin(admin.ModelAdmin):
    list_display = ("curriculum", "title")
