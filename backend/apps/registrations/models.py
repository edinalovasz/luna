from datetime import timedelta
from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone

User = get_user_model()


class Registration(models.Model):
    # RESET_PASSWORD = 'RP'
    # NEW_REGISTRATION = 'NR'
    # CODE_TYPE_CHOICES = [
    #     (RESET_PASSWORD, 'reset_password'),
    #     (NEW_REGISTRATION, 'new_registration'),
    # ]
    user            = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name="user_registration")
    email           = models.EmailField(unique=True, null=False)
    code            = models.CharField(max_length=32, null=False)
    # code_type     = models.CharField(max_length=2, choices=CODE_TYPE_CHOICES)
    # code_expiration = models.DateTimeField(default=timezone.now() + timedelta(days=2))
    # created       = models.DateTimeField(auto_now=True)


def __str__(self):
    return f'Registration ID {self.pk}: {self.email}'
