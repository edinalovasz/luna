from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models


class User(AbstractUser):
    # Field used for authentication in Django admin
    USERNAME_FIELD = 'email'
    # Extra fields needed when using createsuperuser (by default USERNAME_FIELD and passwords
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True, default='example@email.com')

    location = models.CharField(blank=True, max_length=1000)

    about_me = models.CharField(blank=True, max_length=2000)

    avatar = models.ImageField(null=True, blank=True)

    phone_number = models.CharField(blank=True, max_length=15)

    things_user_loves = ArrayField(models.CharField(max_length=100, blank=True), blank=True, default=list)

    def __str__(self):
        return f'User ID: {self.id} Name: {self.first_name}'
