from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer

class ContactMailView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            contact_instance = serializer.save()

            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            subject = serializer.validated_data.get('subject')
            message = serializer.validated_data.get('message')

            # Send email
            try:
                send_mail(
                    f"Contact Form: {subject}",
                    f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.CONTACT_RECIPIENT_EMAIL], # Send to the configured recipient email
                    fail_silently=False,
                )
                return Response({"message": "Email sent successfully!"}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else: # This else block should only handle validation errors
            print("Serializer Errors:", serializer.errors) # Correct placement
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
