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


def course(request, course_id):

    sub_course = Course.objects.get(id=course_id)

    sections = Section.objects.filter(course=sub_course)
    playlists = Playlist.objects.filter(section__in=sections)

    for list in playlists:
        playlist_items = ItemOnPlaylist.objects.filter(playlist=list).order_by('sequence')
        list.items = []
        for pair in playlist_items:
            pair.item.complete = random.randint(1, 2)
            list.items.append(pair.item)
        list.length = len(list.items)

        print list.items
    return render(request, "Edulution/sub_course.html", {'course': sub_course,
                                                         'playlists': playlists})