from django.urls import path
from . import views

urlpatterns = [
    path('greetings', views.hello_world, name="hello-world"),
    path('skills', views.get_skills, name="skills")
]

