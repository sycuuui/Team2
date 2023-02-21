from django.db import models

# Create your models here.
class Answer(models.Model):
    ans = models.CharField(default="", max_length=10, null=False, blank=False)

class Question(models.Model):
    id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=400)

    option1 = models.CharField(max_length=200)
    option2 = models.CharField(max_length=200)
    option3 = models.CharField(max_length=200)
    
    img = models.ImageField(max_length=500, null=True, blank=True)

    def __str__(self):
        return str(self.id)+"번 문제"
    
class User(models.Model):
    univ = models.CharField(max_length=30)
    answer = models.CharField(default="", max_length=10, null=False, blank=False)
    score = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.univ