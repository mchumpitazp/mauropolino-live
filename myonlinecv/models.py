from distutils.command.upload import upload
from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=255) 
    cover_image = models.ImageField(upload_to='projects/', default=None)
    category = models.CharField(max_length=255)
    year = models.PositiveSmallIntegerField()
    description = models.TextField()
    source_code = models.TextField(blank=False, null=False, default="#")
    timestamp = models.DateField(auto_now_add=False, auto_now=False)

    def __str__(self):
        return self.name


class Image(models.Model):
    project   = models.ForeignKey(Project, on_delete=models.CASCADE, default=None, related_name="images")
    image     = models.ImageField(upload_to='projects/')
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.image.name

    def serialize(self):
        return {
            "image_alt": self.image.name,
            "image_url": self.image.url
        }

class ProgrammingLanguage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, default=None, related_name="programming_languages")
    language = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.language

    def serialize(self):
        return {
            "language": self.language
        }
 
class CodingSkill(models.Model):
    name = models.CharField(max_length=15)
    level = models.BooleanField()

    def __str__(self):
        return self.name