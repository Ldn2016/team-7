from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

#open to extentions
class Client(models.Model):
	user = models.OneToOneField(User)

class Item(models.Model):
	user = models.ManyToManyField(Client)

	title = models.TextField()

	TYPES = (
		("vid","Video"),
		"exr","Exercise",
		)

	type = models.CharField(max_length=3,choices=TYPES)

	#path video_id and exercise_id are skipped



class Subject(models.Model):
	title = models.TextField()

class Course(models.Model):
	name = models.TextField()
	subject = models.ForeignKey(Subject)

class Section(models.Model):
	course = models.ForeignKey(Course)

class Playlist(models.Model):
	name = models.TextField()
	section = models.ForeignKey(Section)
	user = models.ManyToManyField(Client)
	item = models.ManyToManyField(Item)

class Baseline(models.Model):
	user = models.ForeignKey(User)
	course = models.ForeignKey(Course)
