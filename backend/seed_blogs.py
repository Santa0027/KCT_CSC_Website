import os
import django
import random
from datetime import timedelta
from django.utils import timezone
from django.core.files.base import ContentFile
import requests

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from blogs.models import Blog, Category
from django.contrib.auth.models import User

def create_blogs():
    print("Seeding Blogs...")
    
    # Ensure a superuser exists for authoring
    admin_user, created = User.objects.get_or_create(username='admin', defaults={'email': 'admin@example.com'})
    if created:
        admin_user.set_password('admin')
        admin_user.save()

    # Create Categories
    categories = ['Web Development', 'Data Science', 'Cyber Security', 'Cloud Computing', 'Career Advice']
    cat_objs = []
    for cat_name in categories:
        cat, _ = Category.objects.get_or_create(name=cat_name)
        cat_objs.append(cat)

    # Blog Data
    blog_titles = [
        "The Future of Web Development in 2025",
        "Top 10 Python Libraries for Data Science",
        "How to Secure Your Home Network against Cyber Threats",
        "Getting Started with AWS: A Beginner's Guide",
        "Resume Tips for IT Freshers",
        "React vs Vue: Which Framework to Choose?",
        "Understanding Machine Learning Algorithms",
        "The Importance of Soft Skills in Tech",
        "Cloud Computing Trends to Watch",
        "Ethical Hacking: A Lucrative Career Path",
        "Mastering CSS Grid and Flexbox",
        "Introduction to DevOps Practices",
        "Full Stack Developer Roadmap 2025",
        "Why You Should Learn SQL",
        "Building Scalable APIs with Django"
    ]

    images = [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800"
    ]

    for i, title in enumerate(blog_titles):
        if Blog.objects.filter(title=title).exists():
            continue
            
        category = random.choice(cat_objs)
        image_url = random.choice(images)
        
        # Download image to save to ImageField
        response = requests.get(image_url)
        if response.status_code == 200:
            img_content = ContentFile(response.content)
            img_name = f"blog_{i}.jpg"
        else:
            img_content = None
            img_name = None

        blog = Blog(
            title=title,
            category=category,
            author=admin_user,
            content=f"""
                <p>This is a seeded blog post about <strong>{title}</strong>. It contains relevant information for students interested in {category.name}.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Key Takeaways</h3>
                <ul>
                    <li>Understanding the basics of {title}.</li>
                    <li>How {category.name} impacts the industry.</li>
                    <li>Future trends and opportunities.</li>
                </ul>
                <p>Stay tuned for more updates!</p>
            """,
            is_published=True
        )
        
        if img_content:
            blog.thumbnail.save(img_name, img_content, save=False)
            
        blog.save()
        print(f"Created blog: {title}")

    print("Blog seeding complete!")

if __name__ == '__main__':
    create_blogs()
