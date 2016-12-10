from django.conf.urls import url
from Edulution import views

urlpatterns = [
    # index
    url(r'^$', views.index, name='index'),
    url('^courses/$', views.courses, name='courses'),
]