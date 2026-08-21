from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'projects', views.ProjectsViewSet, basename='project')
router.register(r'experience', views.ExperienceViewSet, basename='experience')
router.register(r'skills', views.SkillsViewSet, basename="skills")
router.register(r'education', views.EducationViewSet, basename="education")
router.register(r'profile', views.ProfileViewSet, basename="profile")


urlpatterns = [
    path('greetings/', views.hello_world, name="hello-world"),
    path('', include(router.urls))
]

