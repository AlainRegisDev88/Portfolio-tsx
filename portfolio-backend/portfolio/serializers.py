from rest_framework import serializers
from .models import Skills, Education


class SkillsSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Skills
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        

        