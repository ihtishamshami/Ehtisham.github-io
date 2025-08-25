from django.db import models

# Create your models here.
# For now, we're using static data in views, but you can add models here later
# Example models for future database integration:

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    demo_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    technologies = models.JSONField(default=list)  # Store as JSON array
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    year = models.CharField(max_length=4)
    icon = models.CharField(max_length=50, default='award')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.title} at {self.company}"
