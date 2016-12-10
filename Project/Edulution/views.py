from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseRedirect,\
    HttpResponse, HttpRequest, Http404
from models import *
from django.contrib.auth.models import User
import random

def index(request):
    """

    :param request: HttpRequest
    :return: HttpResponse
    """

    return render(request, "Edulution/index.html")

def courses(request):

    context = {'subjects': Subject.objects.all()}
    percent = 100

    for subject in context['subjects']:
        subject.courses = Course.objects.filter(subject=subject)
        subject.percent = percent
        tmp_percent = percent
        for course in subject.courses:
            if tmp_percent > 0:
                course.complete = True
            tmp_percent -= 25
        percent -= 35

    return render(request, "Edulution/courses.html", context)
