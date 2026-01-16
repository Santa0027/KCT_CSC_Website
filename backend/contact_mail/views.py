from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer
from training.models import Course


class ContactMailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data.get("name")
            email = serializer.validated_data.get("email")
            phone = serializer.validated_data.get("phone", "N/A")
            subject = serializer.validated_data.get("subject")
            message = serializer.validated_data.get("message")

            course = None
            course_title = "Not specified"

            if subject and subject.startswith("Enquiry for "):
                course_name = subject.replace("Enquiry for ", "", 1).strip()
                course_title = course_name  # Fallback
                try:
                    course = Course.objects.get(title__iexact=course_name)
                    course_title = course.title  # Use actual title
                except Course.DoesNotExist:
                    pass  # Course not in DB, use the name from subject

            # Save the instance with the course if found
            serializer.save(course=course)

            # Send email
            try:
                send_mail(
                    f"Contact Form: {subject} - from {name}",
                    f"Name: {name}\nPhone: {phone}\nEmail: {email}\nCourse: {course_title}\n\nMessage:\n{message}",
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.CONTACT_RECIPIENT_EMAIL],
                    fail_silently=False,
                )
                return Response(
                    {"message": "Email sent successfully!"}, status=status.HTTP_200_OK
                )
            except Exception as e:
                return Response(
                    {"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
