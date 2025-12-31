import os
import django
import sys
from django.utils.text import slugify

# Setup Django environment
sys.path.append('/home/santhakumar/Documents/project/KCT_CSC_Website/backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from training.models import Course, Curriculum, CurriculumTopic, CourseHighlight, CareerOpportunity, WhyChoose, IdealFor, CourseFAQ

def seed_courses():
    print("Clearing existing course data...")
    Course.objects.all().delete()

    courses_data = [
        {
            "title": "Diplamo in Computer Application (DCA)",
            "slug": "dca",
            "duration": "6 Months",
            "short_description": "Foundational course covering computer basics, OS, and office tools.",
            "long_description": "Our DCA program provides a solid foundation in computer applications, making you proficient in office automation and essential programming concepts.",
            "curriculum": [
                {"title": "Computer Fundamentals", "topics": ["Basics of Computer", "Hardware & Software"]},
                {"title": "Operating Systems", "topics": ["Windows 10/11"]},
                {"title": "Office Suite", "topics": ["MS Word", "MS Excel", "MS PowerPoint"]},
                {"title": "Programming", "topics": ["C Programming", "C++ Programming"]},
                {"title": "Web Basics", "topics": ["HTML"]}
            ],
            "price": 5000,
            "discount": 10
        },
        {
            "title": "Post Graduate Diploma in Computer Application (PGDCA)",
            "slug": "pgdca",
            "duration": "1 Year",
            "short_description": "Advanced diploma for graduates covering comprehensive IT skills.",
            "long_description": "The PGDCA is an extensive 1-year program designed for graduates to master computer applications, from office management to advanced programming.",
            "curriculum": [
                {"title": "Core Modules", "topics": ["Computer Fundamentals", "Windows OS", "MS Office Suite", "HTML"]},
                {"title": "Programming", "topics": ["C Programming", "C++ Programming"]},
                {"title": "Elective 1", "topics": ["JAVA", "Python"]},
                {"title": "Elective 2", "topics": ["Tally Prime", "Photoshop"]},
                {"title": "Projects", "topics": ["2 Real-world Projects"]}
            ],
            "price": 12000,
            "discount": 15
        },
        {
            "title": "Honors Diploma in Computer Application (HDCA)",
            "slug": "hdca",
            "duration": "1 Year",
            "short_description": "An honors program focused on industry-relevant IT skills.",
            "long_description": "HDCA offers a deep dive into computer applications with a focus on practical implementation and specialized electives.",
            "curriculum": [
                 {"title": "Core Modules", "topics": ["Computer Fundamentals", "Windows OS", "MS Office Suite", "HTML"]},
                {"title": "Programming", "topics": ["C Programming", "C++ Programming"]},
                {"title": "Elective 1", "topics": ["JAVA", "Python"]},
                {"title": "Elective 2", "topics": ["Tally Prime", "Photoshop"]},
                {"title": "Projects", "topics": ["2 Real-world Projects"]}
            ],
            "price": 12000,
            "discount": 15
        },
        {
            "title": "Advance Diploma in Computer Application (ADCA)",
            "slug": "adca",
            "duration": "6 Months",
            "short_description": "Master advanced programming languages.",
            "long_description": "ADCA is tailored for those who want to specialize in software development using C, C++, Java, and Python.",
            "curriculum": [
                {"title": "Programming Languages", "topics": ["C Programming", "C++ Programming", "Java", "Python"]},
                {"title": "Projects", "topics": ["2 Major Projects"]}
            ],
            "price": 8000,
            "discount": 10
        },
         {
            "title": "Diploma in Accounting Software (DAS)",
            "slug": "das",
            "duration": "6 Months",
            "short_description": "Specialized course for computerized accounting.",
            "long_description": "Become an accounting professional with expertise in Tally Prime and office automation tools.",
            "curriculum": [
                {"title": "Computer Basics", "topics": ["Fundamentals", "Windows OS"]},
                {"title": "Office Tools", "topics": ["MS Office Suite"]},
                {"title": "Accounting", "topics": ["Tally Prime", "GST Basics"]}
            ],
            "price": 6000,
            "discount": 5
        },
        {
            "title": "Diploma in Office Management (DOM)",
            "slug": "dom",
            "duration": "2 Months",
            "short_description": "Fast-track course for office administration skills.",
            "long_description": "Learn to manage office operations efficiently with MS Office and Internet proficiency.",
            "curriculum": [
                {"title": "Basics", "topics": ["Computer Fundamentals", "Windows"]},
                {"title": "MS Office", "topics": ["Word", "Excel", "PowerPoint", "Outlook"]},
                {"title": "Internet", "topics": ["Email & Web Browsing"]}
            ],
            "price": 3000,
            "discount": 0
        },
        {
            "title": "Diploma in Web Development (DWD)",
            "slug": "dwd",
            "duration": "3 Months",
            "short_description": "Learn to build modern websites.",
            "long_description": "Kickstart your web development career with HTML, CSS, JS, and Bootstrap.",
            "curriculum": [
                {"title": "Web Technologies", "topics": ["HTML5", "CSS3", "JavaScript", "Bootstrap"]},
                {"title": "Tools", "topics": ["Web Dev Tools", "VS Code"]},
                 {"title": "Project", "topics": ["1 Live Project"]}
            ],
            "price": 7000,
            "discount": 10
        },
        {
            "title": "Diploma in Full Stack Development (DFSD)",
            "slug": "dfsd",
            "duration": "6 Months",
            "short_description": "Become a complete full-stack developer.",
            "long_description": "Comprehensive training in front-end and back-end technologies including React/Angular, Java/Python, and SQL.",
            "curriculum": [
                {"title": "Front End", "topics": ["HTML", "CSS", "JavaScript", "Bootstrap"]},
                {"title": "Frameworks", "topics": ["Angular OR React"]},
                {"title": "Back End", "topics": ["Java OR Python"]},
                {"title": "Database", "topics": ["SQL"]},
                {"title": "Project", "topics": ["1 Capstone Project"]}
            ],
            "price": 15000,
            "discount": 20
        },
        {
            "title": "Kids Coding",
            "slug": "kids-coding",
            "duration": "2 Months",
            "short_description": "Fun and interactive coding for kids.",
            "long_description": "Introduce your child to the world of logic and creativity with Scratch or Python.",
            "curriculum": [
                {"title": "Programming", "topics": ["Scratch Programming (visual) OR Python"]},
                 {"title": "Project", "topics": ["1 Fun Project"]}
            ],
            "price": 4000,
            "discount": 0
        }
    ]

    certificate_courses = [
        {"title": "Tally Prime", "duration": "2 Months"},
        {"title": "MS Office", "duration": "2 Months"},
        {"title": "Web Development", "duration": "3 Months"},
        {"title": "Scratch Coding", "duration": "2 Months"},
        {"title": "Java Script", "duration": "2 Months"},
        {"title": "Programming C, C++", "duration": "2 Months"},
        {"title": "Java", "duration": "2 Months"},
        {"title": "Python", "duration": "2 Months"},
    ]
    
    # Create Diploma Courses
    for data in courses_data:
        curriculum_data = data.pop('curriculum')
        # Add basic defaults
        data['breakdown'] = "Classroom Training"
        
        course = Course.objects.create(**data)
        
        # Add Curriculum
        for idx, module in enumerate(curriculum_data):
            curr = Curriculum.objects.create(course=course, title=module['title'], order=idx+1)
            for topic in module['topics']:
                CurriculumTopic.objects.create(curriculum=curr, title=topic)
        
        # Add Highlight
        CourseHighlight.objects.create(course=course, text="Certified Course")
        CourseHighlight.objects.create(course=course, text="Expert Mentors")
        
        # Add Rich Data (Why Choose, Ideal For, Careers, FAQs)
        WhyChoose.objects.create(course=course, title="Practical Learning", description="Focus on real-world projects and hands-on coding.")
        WhyChoose.objects.create(course=course, title="Job Assistance", description="Dedicated support to help you land your dream job.")
        
        IdealFor.objects.create(course=course, text="Students & Graduates")
        IdealFor.objects.create(course=course, text="Career Switchers")
        
        CareerOpportunity.objects.create(course=course, role="Computer Operator")
        CareerOpportunity.objects.create(course=course, role="Support Specialist")

        CourseFAQ.objects.create(course=course, question="Do I need prior coding knowledge?", answer="No, this course starts from the absolute basics.")
        CourseFAQ.objects.create(course=course, question="Is this course certified?", answer="Yes, you will receive a valid certification from PTCEE upon completion.")
        
        print(f"Created Course: {course.title}")

    # Create Certificate Courses
    for cert in certificate_courses:
         course = Course.objects.create(
            title=f"Certificate in {cert['title']}",
            slug=slugify(f"cert-{cert['title']}"),
            duration=cert['duration'],
            short_description=f"Specialized certification in {cert['title']}.",
            long_description=f"Gain expertise in {cert['title']} with our specialized short-term certification course. This program is designed to provide you with in-depth knowledge and practical skills in a short period.",
            breakdown="Practical Labs",
            price=3000,
            discount=0
         )
         CourseHighlight.objects.create(course=course, text="Skill Based")
         CourseHighlight.objects.create(course=course, text="Quick Completion")
         
         # Rich Data for Certificates
         WhyChoose.objects.create(course=course, title="Fast Track Learning", description="Master a specific skill in just a few months.")
         WhyChoose.objects.create(course=course, title="Industry Standard", description="Curriculum aligned with current industry requirements.")
         
         IdealFor.objects.create(course=course, text="College Students")
         IdealFor.objects.create(course=course, text="Working Professionals")
         
         CareerOpportunity.objects.create(course=course, role=f"{cert['title']} Specialist")
         
         CourseFAQ.objects.create(course=course, question="Is this a weekend batch?", answer="We offer both weekday and weekend batches to suit your schedule.")
         CourseFAQ.objects.create(course=course, question="What is the class duration?", answer="Classes are typically 1-2 hours daily, with flexible timing options.")

         print(f"Created Certificate Course: {course.title}")

if __name__ == '__main__':
    seed_courses()
