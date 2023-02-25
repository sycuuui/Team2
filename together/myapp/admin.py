from django.contrib import admin
from .models import Question, User, Answer, Univ

# Register your models here.
admin.site.register(Question)
admin.site.register(Univ)
admin.site.register(User)