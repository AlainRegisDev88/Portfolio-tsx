from django.db import models

# Create your models here.

class Skills(models.Model):
    
    CATEGORY_CHOICES = [
        ('programming', 'Programming'),
        ('AI and data science', 'AI & Data Science'),
        ('web_development', 'Web Development'),
        ('tools', 'Tools & Platforms')
    ]
    
    
    name = models.CharField(max_length=50, unique=True)
    category = models.CharField(
        max_length=50,
        choices= CATEGORY_CHOICES,
        default= 'programming'
    )

    def __str__(self):
        return self.name


    