from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Skills
from .serializers import SkillsSerializer
# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello world"})

@api_view(['GET'])
def get_skills(request):
    skills_data = Skills.objects.all()
    
    serializer = SkillsSerializer(skills_data, many=True)
    
    return Response(serializer.data)