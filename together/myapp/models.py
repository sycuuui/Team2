from django.db import models

# Create your models here.
class Univ(models.Model):
    id=models.AutoField(primary_key=True)

    univ = models.CharField(max_length=50)
    img = models.ImageField (upload_to="img/%Y/%m/%d", null=True, blank=True)
    total_score = models.IntegerField(default=0, null=True, blank=True)

class Answer(models.Model):
    ans = models.CharField(default="", max_length=10, null=False, blank=False)

class Question(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=400)

    option1 = models.CharField(max_length=200)
    option2 = models.CharField(max_length=200)
    option3 = models.CharField(max_length=200)
    
    ans = models.IntegerField(default=False)
    explanation = models.TextField(default="", max_length=2000)
    q_img = models. ImageField (upload_to="img/%Y/%m/%d", null=True, blank=True)

    
class User(models.Model): 
    answer = models.CharField(default="", max_length=10, null=False, blank=False)
    score = models.IntegerField(default=0, null=True, blank=True)
    univ = models.CharField(max_length=50)

#    def __str__(self):
#        return self.univ

