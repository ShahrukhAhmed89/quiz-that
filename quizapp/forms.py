from django import forms
from .models import Quiz


# class QuizCreateFrom(forms.Form):
#     title           = forms.CharField(max_length=160, label="Enter Title")
#     description     = forms.CharField(max_length=500, label="Enter Description")
#     data            = forms.CharField(widget=forms.Textarea, label="Enter Quiz Data")





class QuizCreateFrom(forms.ModelForm):
    
    class Meta:
            model = Quiz
            fields = ('title', 'description', 'data', 'publish')
            