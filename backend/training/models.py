from django.db import models
from django.utils.text import slugify
import json # Import json for serialization/deserialization

class Course(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255, blank=True)
    hero_image = models.CharField(max_length=255, blank=True) # Storing path as char field
    short_description = models.TextField()
    long_description = models.TextField()
    # Changed ArrayField to TextField, will store JSON string
    tools = models.TextField(blank=True, default="[]") 
    course_duration = models.CharField(max_length=100)
    course_breakdown = models.CharField(max_length=255)
    # Changed ArrayField to TextField, will store JSON string
    course_modes = models.TextField(blank=True, default="[]") 
    why_choose = models.JSONField(blank=True, default=list) # Using standard Django JSONField
    core_modules = models.JSONField(blank=True, default=list) # Using standard Django JSONField
    # Changed ArrayField to TextField, will store JSON string
    career_opportunities = models.TextField(blank=True, default="[]")
    # Changed ArrayField to TextField, will store JSON string
    course_highlights = models.TextField(blank=True, default="[]")
    # Changed ArrayField to TextField, will store JSON string
    ideal_for = models.TextField(blank=True, default="[]")
    curriculum = models.JSONField(blank=True, default=list) # Using standard Django JSONField
    # Changed ArrayField to TextField, will store JSON string
    images = models.TextField(blank=True, default="[]") 

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
