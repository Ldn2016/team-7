import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Project.settings')
django.setup()

from django.contrib.auth.models import User
from Edulution.models import Client, Baseline, Item,\
    Subject, Course, Playlist, Section, ItemOnPlaylist, ExerciseLog
import datetime

FAKE_SUBJECTS = ['Mathematics', 'Literacy', 'Hackathon Winning', 'Disk Jockery', 'Health']


def pop_subjects():

    for subject in FAKE_SUBJECTS:
        Subject.objects.get_or_create(title=subject)


def pop_users():

    users = open("Edulution/data/User.csv")

    for line in users.readlines()[1:]:
        split_line = line.split(",")
        User.objects.get_or_create(first_name=split_line[0], username=split_line[1],
                                          password="test123")
        # user_id is now first name, god forgive my technical debt

    users.close()

    for client in Client.objects.all():
        for subject in Subject.objects.all():
            client.enrolled_in.add(subject)



def pop_items():

    items = open("Edulution/data/Item.csv")

    for line in items.readlines()[1:]:
        split_line = line.split(",")
        if split_line[0] == "Video":
            type = "vid"
        else:
            type = "exr"
        Item.objects.get_or_create(type=type, exercise_id=split_line[1],
                                   video_id=split_line[2], title=split_line[3],
                                   path=split_line[4])


    items.close()


def pop_courses():

    for subject in Subject.objects.all():
        for course in ['pre-alpha', 'alpha', 'bravo', 'charlie']:
            Course.objects.get_or_create(subject=subject, name=course)


def pop_sections():

    for course in Course.objects.all():
        for section in ['A', 'B', 'C', 'D']:
            Section.objects.get_or_create(course=course, name=section)


def pop_playlist():

    plays = open("Edulution/data/Playlist.csv")


    subject = Subject.objects.get(title='Mathematics')
    for line in plays.readlines()[1:]:

        split_line = line.split(",")

        course = Course.objects.get(name=split_line[0], subject=subject)
        section = Section.objects.get(name=split_line[1], course=course)

        y, x = Playlist.objects.get_or_create(name="Fake playlist", section=section)

        ItemOnPlaylist.objects.get_or_create(item=Item.objects.get_or_create(exercise_id=split_line[3])[0],
                                             sequence=split_line[2],
                                             playlist=y)

    plays.close()

    for section in Section.objects.all():
        if len(Playlist.objects.filter(section=section)) == 0:
            y, x = Playlist.objects.get_or_create(name="Fake playlist", section=section)

            for i in range(1, 10):

                fake_id = "Item " + str(i) + " for " + section.course.subject.title \
                          + " " + str(section.course.name) + " " + str(section.name)
                b, a = Item.objects.get_or_create(type='exr', exercise_id=fake_id,
                                                  video_id=fake_id, title=fake_id,
                                                  path=fake_id)

                ItemOnPlaylist.objects.get_or_create(item=b, sequence=i, playlist=y)


def pop_exercise_log():

    exc = open("Edulution/data/ExerciseLog.csv")

    for line in exc.readlines()[1:]:
        split_line = line.split(",")
        user = User.objects.get(first_name=split_line[0])
        date = datetime.now()
        exercise = Item.objects.get(exercise_id=split_line[4])
        # can't be bothered parsing datetime right now
        # with each passing line my technical debt grows. forgive me 

        ExerciseLog.objects.get_or_create(user_id=user,
                                          exercise_id=exercise,
                                          completion_timestamp=date,
                                          attempts=split_line[2],
                                          struggling=split_line[3],
                                          streak_progress=split_line[5],
                                          attempts_before_completion=split_line[6])

    exc.close()


#currently not working
def pop_baselines():

    baselines = open("Edulution/data/Baseline.csv")

    for line in baselines.readlines()[1:]:
        split_line = line.split(",")
        user = User.objects.get(first_name=split_line[0])
        subject = Subject.objects.get(title="Mathematics")
        course = Course.objects.get(name=split_line[1],
                                    subject=subject)
        Baseline.objects.get_or_create(user_id=user,
                                       course=course,
                                       test_count=split_line[2],
                                       date=datetime.date.today(),  # sorry Per I've let you down
                                       percent=split_line[5][:-1],
                                       test=split_line[6],
                                       percent_a=split_line[7][:-1],
                                       percent_b=split_line[8][:-1],
                                       percent_c=split_line[9][:-1],
                                       percent_d=split_line[10][:-1])

    baselines.close()


pop_subjects()
print "Added subjects"
pop_courses()
print "Added courses"
pop_sections()
print "Added sections"
pop_users()
print "Added users"
pop_items()
print "Added items"
pop_playlist()
print "Added playlists"
#
#currently not working
# pop_baselines()
#print "Added baselines"