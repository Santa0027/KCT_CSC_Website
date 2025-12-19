from django import forms
from .models import Blog,Category,Comment


class BlogForms(forms.ModelForm):
    class Meta :
        model=Blog
        fields = ['title', 'category', 'content', 'thumbnail', 'is_published']
        
        


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['message']        