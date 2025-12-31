import os
import django
import sys

# Setup Django environment
sys.path.append('/home/santhakumar/Documents/project/KCT_CSC_Website/backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from testimonials.models import StudentReview

def seed_testimonials():
    # Clear existing
    StudentReview.objects.all().delete()
    
    reviews = [
        {
            "name": "Alex Johnson",
            "role": "Software Engineer",
            "review": "The Full Stack course was a game changer for my career. The practical labs were amazing.",
            "tag_text": "Placement",
            "rating": 5
        },
        {
            "name": "Sarah Lee",
            "role": "Data Analyst",
            "review": "Highly recommended! The trainers are industry experts who know their stuff.",
            "tag_text": "Excellent",
            "rating": 5
        },
        {
            "name": "Michael Chen",
            "role": "Student",
            "review": "Great infrastructure and support. I learned so much in just 3 months.",
            "tag_text": "Support",
            "rating": 4
        }
    ]

    for review in reviews:
        StudentReview.objects.create(**review)
        print(f"Created review for {review['name']}")

if __name__ == '__main__':
    seed_testimonials()
