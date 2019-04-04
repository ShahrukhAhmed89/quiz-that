from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect, Http404
from django.utils.text import slugify
from .forms import QuizCreateFrom
from .models import Quiz
from .forms import QuizCreateFrom
import json
from random import shuffle
from django.http import Http404
from django.contrib.auth.decorators import login_required


def home(request):



    # if request.COOKIES.get('sort_by') == 'recent':
    #     values = [1,4,6,7,8,9,9,0,9,7]
    # else:
    #     values = [9,8,7,6,5,4,3,2,1]

    # context = {
    #     'values' : values,
    #     'sort_by' : request.COOKIES.get('sort_by')
    # }
    # if not request.COOKIES.get('sort_by'):
    #     context['sort_by'] = 'popular'
    #     response = render(request, "test.html", context)
    #     response.set_cookie('sort_by', 'popular')
    #     return response


    
    
    return render(request, "quiz/home.html", {})#render(request, "base.html", {})


def quiz_detail(request, id, slug):
    quiz = get_object_or_404(Quiz, id=id)
    if quiz.slug != slug:
        return redirect('quiz:quiz_detail', id=quiz.id, slug=quiz.slug)
    json_data = quiz.data
    for i in json_data:
        shuffle(i["options"])
    return render(request, "quiz/quiz.html", {'quiz': quiz})


def quiz_sections(request, category=None):
    quiz_list = Quiz.objects.published().filter(category__slug=category)
    if not quiz_list:
        raise Http404()
    category = quiz_list[0].category

    context = {"quiz_list": quiz_list, "category": category}
    return render(request, 'quiz/quiz_sections.html', context)



def fetch_quiz_data(request, id):
    quizPost = Quiz.objects.get(id=id)
    if request.user.is_authenticated:
        response = {
            'title'         : quizPost.title,
            'description'   : quizPost.description,
            'quizData'      : quizPost.data,
            'publish'       : quizPost.publish,
            'id'            : quizPost.id
        }
        return JsonResponse(response, content_type='application/json')
    else:
        raise Http404('Page not found')



def submit_quiz(request):
    if request.POST:
        data = json.loads(request.body.decode('utf-8'))
        clean_data = {
            'title' : data["title"],
            'description': data["description"],
            'data' : data["quizData"],
        }
        form = QuizCreateFrom(clean_data)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user.userprofile
            post.slug = slugify(post.title)
            post.publish = data['publish']
            post.save()
            response = {
                'id': post.id,
                'redirect': 'true'
            }
        else:
            response = {
                'error': 'Form Error',
                'redirect':'false'
            }
        return JsonResponse(response, content_type='application/json')
    else:
        raise Http404('Page not found')


def save_quiz(request, id):
    quizPost = Quiz.objects.get(id=id)
    if request.user.is_authenticated:
        if request.POST:
            data = json.loads(request.body.decode('utf-8'))
            clean_data = {
                'title' : data["title"],
                'description': data["description"],
                'data' : data["quizData"],
                'publish' : data['publish']
            }
            form = QuizCreateFrom(clean_data, instance=quizPost)
            if form.is_valid():
                post = form.save(commit=False)
                post.save()
                response = {'data': 'saved'}
            else:
                response = {'data':'error'}
            return JsonResponse(response, content_type='application/json')
        else:
            raise Http404('Page not found')
    else: 
        raise Http404('Page not found')



def quiz_create_template(request):
    if request.user.is_authenticated:
        template = "quiz/quiz_form/quiz_form.html"
        context = {}
    else:
        template = "registration/login.html"
        context = {
            'message': "Before you start building your quiz, let's get you logged in",
            'redirect_url' : 'quiz/create' 
        }
    return render(request, template, context)
    

def quiz_edit_template(request, id):
    quiz = get_object_or_404(Quiz, id=id)
    if request.user.is_authenticated:
        if request.user.userprofile != quiz.author:
            raise Http404()
        template = "quiz/quiz_form/quiz_form.html"
        context = {
            'id': quiz.id
        }
    else:
        template = "registration/login.html"
        context = {
            'message': "Before you start editing your quizzes, let's first get you logged in",
            'redirect_url' : 'quiz/{id}/edit'.format(id=quiz.id),
        }
    return render(request, template, context)





