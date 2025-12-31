from django.contrib import admin
from .models import StudentReview

@admin.register(StudentReview)
class StudentReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'tag_text', 'rating', 'is_active')
    search_fields = ('name', 'review', 'tag_text')
    list_filter = ('is_active',)
