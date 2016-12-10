from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseRedirect,\
    HttpResponse, HttpRequest, Http404

def index(request):
    """

    :param request: HttpRequest
    :return: HttpResponse
    """

    return render(request, "Edulution/index.html")

def courses(request):

    return render(request, "Edulution/courses.html")