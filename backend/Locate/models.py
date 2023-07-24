from django.db import models
import uuid

# Create your models here.
class shop(models.Model):

    Name         = models.CharField(max_length=120)
    Price        = models.IntegerField()
    Address      = models.CharField(max_length=120)
    Country      = models.CharField(max_length=50)
    Rating       = models.IntegerField()
    Introduction = models.TextField()
    Picture      = models.ImageField(upload_to='Shop/')

    def __str__(self):
        return self.Name
    

class comment(models.Model):
    Title        = models.CharField(max_length=120)
    Store        = models.ForeignKey(shop, on_delete=models.CASCADE)
    Body         = models.TextField()
    Photo        = models.ImageField(upload_to='Shop_Comment/')

    
    def __str__(self):
        return self.Title