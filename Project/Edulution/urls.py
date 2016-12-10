from django.conf.urls import url
from Edulution import views

urlpatterns = [
    # index
    url(r'^$', views.index, name='index'),
    url('^courses/$', views.courses, name='courses'),
    url('^sub_course/(?P<sub_course_name>[\w\-]+)/$', views.course, name='course'),
]