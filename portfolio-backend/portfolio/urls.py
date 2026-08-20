from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'projects', views.ProjectsViewSet, basename='project')

urlpatterns = [
    path('api/greetings', views.hello_world, name="hello-world"),
    path('api/skills', views.get_skills, name="skills"),
    path('api/education', views.get_education, name="education"),
    path('api/profile', views.get_profile, name='profile'),
    
    
    path('api/', include(router.urls))
    
]

