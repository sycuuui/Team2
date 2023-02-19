from django.shortcuts import render

# Create your views here.
def showlanding(request):
    return render(request, 'myapp/landing.html')

def showintro(request):
    return render(request, 'myapp/intro.html')

def showintro2(request):
    return render(request, 'myapp/intro2.html')

def showuniv(request):
    return render(request, 'myapp/univ.html')

def showprob1(request):
    return render(request, 'myapp/prob1.html')

def showparticipate(request):
    return render(request, 'myapp/participate.html')