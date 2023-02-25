from django.shortcuts import render, get_list_or_404,redirect
from .models import Answer, Question, User, Univ
import random, operator
from django.core.paginator import Paginator

# Create your views here.
def showlanding(request):
    return render(request, 'myapp/landing.html')

def showintro(request):
    return render(request, 'myapp/intro.html')

def showintro2(request):
    return render(request, 'myapp/intro2.html')

def showgamestart(request):
    return render(request, 'gamestart.html')

def showuniv(request):
    unives = Univ.objects.all()

    p = Paginator(Univ.objects.order_by('-id'),6)
    page = request.GET.get('page')
    venues = p.get_page(page)
    # page_obj = p.page(page) #페이지 번호를 받아 해당 페이지를 리턴 get_page 권장

    person = User()
    person.univ = request.POST.get('univ_name')
    person.save()

    return render(request, 'myapp/univ.html', {'unives' : unives, 'venues':venues} )

def showprob(request):
    # quizes = Question.objects.all()
    quizes = list(Question.objects.all())
    quizes = random.sample(quizes, 10)
    p = Paginator(quizes,1)
    page = request.GET.get('page')
    venues = p.get_page(page)
    return render(request, 'myapp/prob.html', {'quizes' :quizes, 'venues' : venues})

def showparticipate(request):
    person = User()
    unives = Univ.objects.all()


    for univ in unives:
        if person.univ == univ.univ:
            univ.total_score += person.score
            person.save()

    unives1 = list(Univ.objects.all().order_by('-total_score'))[:1]
    unives2 = list(Univ.objects.all().order_by('-total_score'))[1:2]
    unives3 = list(Univ.objects.all().order_by('-total_score'))[2:3]
    unives4 = list(Univ.objects.all().order_by('-total_score'))[3:4]
    unives5 = list(Univ.objects.all().order_by('-total_score'))[5:6]
    return render(request, 'myapp/participate.html', {'unives1' : unives1, 'unives2' : unives2, 'unives3' : unives3, 'unives4' : unives4, 'unives5' : unives5})

def showparticipate2(request):
    user = User.objects.all()
    unives = Univ.objects.all()

    unives1 = list(Univ.objects.all().order_by('-total_score'))[:1]
    unives2 = list(Univ.objects.all().order_by('-total_score'))[1:2]
    unives3 = list(Univ.objects.all().order_by('-total_score'))[2:3]
    unives4 = list(Univ.objects.all().order_by('-total_score'))[3:4]
    unives5 = list(Univ.objects.all().order_by('-total_score'))[5:6]
    return render(request, 'myapp/participate2.html', {'unives':unives, 'unives1' : unives1, 'unives2' : unives2, 'unives3' : unives3, 'unives4' : unives4, 'unives5' : unives5})

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
