import uuid
from django.core.validators import MinValueValidator, MaxValueValidator 
from django.db import models

# Create your models here.


class Profile(models.Model):
    name = models.CharField(max_length=50, default="Regis Alain Udahemuka")
    address = models.CharField(max_length=100)
    nationality = models.CharField(max_length=50, default="Rwanda 🇷🇼")
    university = models.CharField(max_length=50, default="Ashesi Universiy")
    program = models.CharField(max_length=50, default="BSc. Computer Science")
    year = models.CharField(max_length=50, default="Sophomore")
    focus = models.CharField(max_length=100, blank=True)
    languages = models.JSONField(blank=True, default=list)
    
    
    def __str__(self):
        return self.name
    

class Skills(models.Model):
    
    CATEGORY_CHOICES = [
        ('programming', 'Programming'),
        ('AI and data science', 'AI & Data Science'),
        ('web_development', 'Web Development'),
        ('tools', 'Tools & Platforms')
    ]
    
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(
        max_length=50,
        choices= CATEGORY_CHOICES,
        default= 'programming'
    )
    proficiency =models.IntegerField(
        validators=[
            MinValueValidator(0),
            MaxValueValidator(100)
        ]
    )
    currently_learning = models.BooleanField(default=False, null=True)
    

    def __str__(self):
        return self.name


class Projects(models.Model):
    uuid  =models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    name = models.CharField(max_length=50, unique=True)
    languages = models.JSONField(blank=True, default=list)
    description = models.TextField(blank=True)
    github = models.BooleanField(default=False)
    live = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
    
    
class Experience(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    name = models.CharField(unique=True)
    category = models.CharField(max_length=50)
    organisation = models.CharField(max_length=50, blank=False)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class Education(models.Model):    
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    school = models.CharField(max_length=70)
    program = models.CharField(max_length=70)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    coursework = models.JSONField(blank=True, default=list)
    
    def __str__(self):
        return self.school
    
    