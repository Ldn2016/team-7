from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseRedirect,\
    HttpResponse, HttpRequest, Http404
from models import *
from django.contrib.auth.models import User

def index(request):
    """

    :param request: HttpRequest
    :return: HttpResponse
    """

    return render(request, "Edulution/index.html")

def courses(request):

    return render(request, "Edulution/courses.html")

def course(request, sub_course_name):

    return render(request, "Edulution/sub_course.html", {'sub_course_name': sub_course_name})
