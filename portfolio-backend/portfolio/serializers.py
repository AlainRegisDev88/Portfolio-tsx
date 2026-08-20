from rest_framework import serializers
from .models import Skills, Education, Profile


class SkillsSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Skills
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'
        

class profileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = '__all__'

        