from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.postgres.fields import JSONField, ArrayField
from django.urls import reverse


class UserProfile(models.Model):
    user            = models.OneToOneField(User, on_delete=models.CASCADE)
    custom_username = models.CharField(max_length=25)
    avatar          = models.ImageField(null=True, blank=True)
    bio             = models.TextField()
    birthday        = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username
     


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance).save()



# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.chingu.save()

class Category(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    slug = models.SlugField(max_length=50)

    def __str__(self):
        return self.title



class Tags(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)

    
    def __str__(self):
        return self.title


# Create your models here.
class Quiz(models.Model):
    author          = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    category        = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    title           = models.CharField(max_length=160)
    description     = models.CharField(max_length=500, null=True, blank=True)
    data            = JSONField()
    time_created    = models.DateField(auto_now_add=True)
    time_modified   = models.DateField(auto_now_add=True)
    publish         = models.BooleanField(default=False)
    tags            = models.ManyToManyField(Tags, related_name="quiz_tags")
    upvotes         = ArrayField(models.IntegerField(), blank=True, null=True)
    admin_approved  = models.BooleanField(default=False)
    slug            = models.SlugField(max_length=200)

    def get_absolute_url(self):
        return reverse("quiz_detail", kwargs={"id": self.id, "slug": self.slug})
    
    
    

    def __str__(self):
        return self.title