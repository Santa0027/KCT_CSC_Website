from django.urls import path
from .views import ContactMailView

urlpatterns = [
    path('contact/', ContactMailView.as_view(), name='contact_mail'),
]
