from django.db import models

class StudentReview(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True, help_text="e.g. 'Software Engineer at Google' or 'Student'")
    review = models.TextField(blank=True, help_text="Main testimonial text")
    tag_text = models.CharField(max_length=50, blank=True, help_text="Short tag like 'Success' or 'Great Support'")
    rating = models.PositiveIntegerField(default=5)
    image = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.tag_text or 'No Tag'}"
