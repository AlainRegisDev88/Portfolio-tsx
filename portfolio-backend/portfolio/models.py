import uuid
from django.core.validators import MinValueValidator, MaxValueValidator 
from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.

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
    languages = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    description = models.TextField()
    github = models.BooleanField(default=False)
    live = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
    
    
    
    