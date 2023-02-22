from django.shortcuts import render, get_list_or_404,redirect
from .models import Answer, Question, User, Univ
import random

# Create your views here.
def showlanding(request):
    return render(request, 'myapp/landing.html')

def showintro(request):
    return render(request, 'myapp/intro.html')

def showintro2(request):
    return render(request, 'myapp/intro2.html')

def showuniv(request):
    unives = Univ.objects.all()
    return render(request, 'myapp/univ_1.html', {'unives' : unives})

def showprob(request):
    # quizes = Question.objects.all()
    quizes = list(Question.objects.all())
    quizes = random.sample(quizes, 10)
    return render(request, 'myapp/prob.html', {'quizes' :quizes})

def showparticipate(request):
    return render(request, 'myapp/participate.html')

# def quiz(request, pk):
#     user = get_list_or_404(User, pk=pk)
#     aans = get_list_or_404(Answer)

#     num = 1
#     if request.POST:
#         num = int(request.POST['quiz_id'])+1
#         user.answer = user.answer + request.POST['answer']
#         if request.POST['answer'] == aans.ans[num-2]:
#             user.score += 1
#             user.save()

#         if num > 4:
#             return redirect('result', pk)
        
#     prob = get_list_or_404(Question, id = num)
#     return render(request, "prob.html", {'prob':prob})
