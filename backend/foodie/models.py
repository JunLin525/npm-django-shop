from django.db import models
import uuid
# Create your models here.
class Area(models.Model):
    id           = models.UUIDField(
                   primary_key=True,
                   default=uuid.uuid4,
                   editable=False)
    Name         = models.CharField(max_length=120)
    Address      = models.CharField(max_length=120)
    Country      = models.CharField(max_length=50)
    Introduction = models.TextField()
    Picture      = models.ImageField(upload_to='Area/')

    def __str__(self):
        return self.Name
    
class Reply(models.Model):
    id           = models.UUIDField(
                   primary_key=True,
                   default=uuid.uuid4,
                   editable=False)
    Area  = models.ForeignKey(Area, on_delete=models.CASCADE)
    Title = models.CharField(max_length=80)
    Body  = models.TextField()
    Picture = models.ImageField(upload_to='Area_Comment')

    def __str__(self):
        return self.Title