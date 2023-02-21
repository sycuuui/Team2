from django.shortcuts import render, get_list_or_404,redirect
from .models import Answer, Question, User

# Create your views here.
def showlanding(request):
    return render(request, 'myapp/landing.html')

def showintro(request):
    return render(request, 'myapp/intro.html')

def showintro2(request):
    return render(request, 'myapp/intro2.html')

def showuniv_1(request):
    return render(request, 'myapp/univ_1.html')

def showuniv_2(request):
    return render(request, 'myapp/univ_2.html')

def showuniv_3(request):
    return render(request, 'myapp/univ_3.html')

def showprob(request):
    return render(request, 'myapp/prob.html')

def showparticipate(request):
    return render(request, 'myapp/participate.html')