from rest_framework import serializers
from .models import Course
import json

class CourseSerializer(serializers.ModelSerializer):
    # For TextField fields that store JSON strings, define custom methods to handle serialization/deserialization
    tools = serializers.SerializerMethodField()
    course_modes = serializers.SerializerMethodField()
    career_opportunities = serializers.SerializerMethodField()
    course_highlights = serializers.SerializerMethodField()
    ideal_for = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_tools(self, obj):
        return json.loads(obj.tools)

    def get_course_modes(self, obj):
        return json.loads(obj.course_modes)

    def get_career_opportunities(self, obj):
        return json.loads(obj.career_opportunities)

    def get_course_highlights(self, obj):
        return json.loads(obj.course_highlights)

    def get_ideal_for(self, obj):
        return json.loads(obj.ideal_for)

    def get_images(self, obj):
        return json.loads(obj.images)

    def to_internal_value(self, data):
        # Handle deserialization for TextField fields that store JSON strings
        for field_name in ['tools', 'course_modes', 'career_opportunities', 'course_highlights', 'ideal_for', 'images']:
            if field_name in data and isinstance(data[field_name], list):
                data[field_name] = json.dumps(data[field_name])
        return super().to_internal_value(data)
