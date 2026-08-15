from django.contrib import admin

# Register your models here.

from .models import Education, Experience, Profile, Projects, Skills 

admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Profile)
admin.site.register(Projects)
admin.site.register(Skills)
