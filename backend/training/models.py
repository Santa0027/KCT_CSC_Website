from django.db import models
from django.utils.text import slugify

class Course(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    short_description = models.TextField()
    long_description = models.TextField()

    duration = models.CharField(max_length=100)
    breakdown = models.CharField(max_length=255)
    price = models.PositiveIntegerField(default=0)
    discount = models.IntegerField(default=0)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title



class CourseImage(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="images",
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="courses/")
    alt_text = models.CharField(max_length=255, blank=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.course.title} Image"


class CourseMode(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="modes",
        on_delete=models.CASCADE
    )
    mode = models.CharField(max_length=50)  # Online, Offline, Hybrid


class WhyChoose(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="why_choose",
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    description = models.TextField()


class CourseHighlight(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="highlights",
        on_delete=models.CASCADE
    )
    text = models.CharField(max_length=255)

class IdealFor(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="ideal_for",
        on_delete=models.CASCADE
    )
    text = models.CharField(max_length=255)
    
class CareerOpportunity(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="careers",
        on_delete=models.CASCADE
    )
    role = models.CharField(max_length=255)

class Curriculum(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="curriculum",
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    order = models.PositiveIntegerField(default=0)


class CurriculumTopic(models.Model):
    curriculum = models.ForeignKey(
        Curriculum,
        related_name="topics",
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)



class CourseFAQ(models.Model):
    course = models.ForeignKey(
        Course,
        related_name="faqs",
        on_delete=models.CASCADE
    )
    question = models.CharField(max_length=255)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.question
