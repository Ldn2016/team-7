from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils import timezone

# open to extentions
class Client(models.Model):
    """
    Class for each user, based on Django users
    """
    user = models.OneToOneField(User)
    score = models.IntegerField()


class Item(models.Model):
    """
    Class for each 'item' of content
    Broken into types vid and exr
    """
    user = models.ManyToManyField(Client)

    title = models.TextField()

    TYPES = (
        ("vid", "Video"),
        ("exr", "Exercise"),
    )

    type = models.CharField(max_length=3, choices=TYPES)

    exercise_id = models.CharField(max_length=128)
    video_id = models.CharField(max_length=128)
    path = models.CharField(max_length=500)


class ExerciseLog(models.Model):
    """
    Class for a log of what students did which items, with some stats
    """

    user_id = models.ForeignKey(Client)
    exercise_id = models.ForeignKey(Item)

    completion_timestamp = models.DateTimeField()
    attempts = models.IntegerField()
    struggling = models.IntegerField()
    streak_progress = models.IntegerField()
    attempts_before_completion = models.IntegerField()


class Subject(models.Model):
    """
    Class for each subject, e.g. Numeracy, Literacy, Health...
    """
    title = models.TextField()


class Course(models.Model):
    """
    Class for each course on a subject, e.g. pre-alpha, alpha, bravo...
    """
    name = models.TextField()
    subject = models.ForeignKey(Subject)


class Section(models.Model):
    """
    Class for each section of a course, e.g. A B C or D
    """
    name = models.TextField()
    course = models.ForeignKey(Course)


class Playlist(models.Model):
    """
    Class for a playlist of many items
    """
    name = models.TextField()
    section = models.ForeignKey(Section)
    user = models.ManyToManyField(Client)
    item = models.ManyToManyField(Item)


class Baseline(models.Model):
    """
    Class for the baseline tests
    """

    user = models.ForeignKey(User)
    course = models.ForeignKey(Course)
    test_count = models.IntegerField()
    percent = models.IntegerField()
    test = models.CharField(max_length=50)

    # Percents for each section
    percent_a = models.IntegerField()
    percent_b = models.IntegerField()
    percent_c = models.IntegerField()
    percent_d = models.IntegerField()

class Badges(models.Model):
    """
    Class for the Badges (Achievements)
    """
    name = models.TextField()
    description = models.TextField()
    points = models.IntegerField()
    condition = models.TextField()
    user = models.ManyToManyField(Client)

class Unlockables(models.Model):
    """
    Class for the Unlockable items
    """
    name = models.TextField()
    points = models.IntegerField()
    user = models.ManyToManyField(Client)
