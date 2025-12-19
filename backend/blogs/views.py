from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User # Import User model

from .models import Blog, Category, Comment
from .serializers import (
    BlogSerializer,
    CategorySerializer,
    CommentSerializer,
    UserSerializer,
)


class BlogListCreateAPIView(generics.ListCreateAPIView):
    queryset = Blog.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class BlogRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] # Allow anyone to list, only authenticated to create


class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug' # Assuming Category also has a slug
    permission_classes = [permissions.IsAuthenticatedOrReadOnly] # Allow anyone to retrieve, only authenticated to update/delete


class CommentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        blog_slug = self.kwargs['blog_slug']
        blog = Blog.objects.get(slug=blog_slug)
        return Comment.objects.filter(blog=blog).order_by('-created_at')

    def perform_create(self, serializer):
        blog_slug = self.kwargs['blog_slug']
        blog = Blog.objects.get(slug=blog_slug)
        serializer.save(user=self.request.user, blog=blog)


class CommentRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self):
        obj = super().get_object()
        # Ensure that only the author of the comment can update/delete it
        if self.request.method in ['PUT', 'PATCH', 'DELETE'] and obj.user != self.request.user:
            self.permission_denied(
                self.request, message="You do not have permission to edit/delete this comment."
            )
        return obj
