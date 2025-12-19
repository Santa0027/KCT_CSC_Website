from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Blog, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')


class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = UserSerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source='author', write_only=True, required=False
    )

    class Meta:
        model = Blog
        fields = (
            'id', 'title', 'slug', 'category', 'category_id', 'author', 'author_id',
            'content', 'thumbnail', 'created_at', 'updated_at', 'is_published'
        )
        read_only_fields = ('author',) # Author is set automatically


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    blog_id = serializers.PrimaryKeyRelatedField(
        queryset=Blog.objects.all(), source='blog', write_only=True
    )
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source='user', write_only=True, required=False
    )

    class Meta:
        model = Comment
        fields = ('id', 'blog', 'blog_id', 'user', 'user_id', 'message', 'created_at')
        read_only_fields = ('user',) # User is set automatically
