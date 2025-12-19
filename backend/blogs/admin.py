from django.contrib import admin
from .models import Blog, Category, Comment


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'is_published', 'created_at')
    list_filter = ('is_published', 'category', 'author', 'created_at')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author',)
    date_hierarchy = 'created_at'

class CommentAdmin(admin.ModelAdmin):
    list_display = ('blog', 'user', 'message', 'created_at')
    list_filter = ('created_at', 'user')
    search_fields = ('message', 'blog__title', 'user__username')
    date_hierarchy = 'created_at'

admin.site.register(Blog, BlogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Comment, CommentAdmin)
