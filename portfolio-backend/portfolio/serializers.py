from rest_framework import serializers
from .models import Skills, Education, Profile, Projects, Experience


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

        
class ProjectsSerializersI(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
        
class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'