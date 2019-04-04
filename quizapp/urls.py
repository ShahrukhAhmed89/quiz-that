from django.urls import path, include
from .views import (home, quiz_detail, quiz_sections, fetch_quiz_data, submit_quiz, save_quiz, quiz_create_template, quiz_edit_template)


urlpatterns = [
    path("", home),
    path("quiz/<slug:category>/", quiz_sections, name="quiz_sections"),
    path("quiz/<int:id>/<slug:slug>", quiz_detail, name="quiz_detail"),

    #fetch urls
    path("quiz/fetch/<int:id>", fetch_quiz_data, name="fetch_quiz_data"),
    path("quiz/submit", submit_quiz, name="submit_quiz"),
    path("quiz/save/<int:id>", save_quiz, name="save_quiz"),

    #get empty templates
    path("quiz/create", quiz_create_template, name="quiz_create_template"),
    path("quiz/edit/<int:id>", quiz_edit_template, name="quiz_edit_template"),
]
