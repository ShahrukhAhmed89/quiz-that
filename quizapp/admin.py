from django.contrib import admin
from .models import Quiz, UserProfile, Category,Tags
from django.db import models
from django.forms import TextInput, Textarea

# Register your models here.

@admin.register(Quiz)
class Admin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    formfield_overrides = {
        models.CharField : {'widget' : TextInput(attrs={'size':'80'})},
        models.TextField : {'widget' : Textarea(attrs={'rows':'20', 'cols':'80'})}
    }
    filter_horizontal = ('tags',)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}


@admin.register(Tags)
class TagsAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}