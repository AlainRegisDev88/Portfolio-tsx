from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Skills, Education, Profile
from .serializers import SkillsSerializer, EducationSerializer, profileSerializer
# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello world"})

@api_view(['GET'])
def get_profile(request):
    profile_data = Profile.objects.all()
    
    serializer = profileSerializer(profile_data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_skills(request):
    skills_data = Skills.objects.all()
    
    serializer = SkillsSerializer(skills_data, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def get_education(request):
    education_data = Education.objects.all()
    
    serializer = EducationSerializer(education_data, many=True)
    
    return Response(serializer.data)
