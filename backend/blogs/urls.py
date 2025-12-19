from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BlogListCreateAPIView,
    BlogRetrieveUpdateDestroyAPIView,
    CategoryListCreateAPIView,
    CategoryRetrieveUpdateDestroyAPIView,
    CommentListCreateAPIView,
    CommentRetrieveUpdateDestroyAPIView,
)

router = DefaultRouter()
# No need to register blog and category views if using generics directly with custom URLs

urlpatterns = [
    path('blogs/', BlogListCreateAPIView.as_view(), name='blog-list-create'),
    path('blogs/<slug:slug>/', BlogRetrieveUpdateDestroyAPIView.as_view(), name='blog-detail-update-delete'),
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<slug:slug>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail-update-delete'),
    path('blogs/<slug:blog_slug>/comments/', CommentListCreateAPIView.as_view(), name='comment-list-create'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyAPIView.as_view(), name='comment-detail-update-delete'),
]
