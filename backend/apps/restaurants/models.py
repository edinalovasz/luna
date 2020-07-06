from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Restaurant(models.Model):
    ETHNIC = 'EF'
    FAST_FOOD = 'FF'
    FAST_CASUAL = 'FC'
    CASUAL_DINING = 'CD'
    PREMIUM_CASUAL = 'PC'
    FAMILY_STYLE = 'FS'
    FINE_DINING = 'FD'
    PUB = 'PB'
    CATEGORIES_CHOICES = [
        (ETHNIC, 'ethnic'),
        (FAST_FOOD, 'fast_food'),
        (FAST_CASUAL, 'fast_casual'),
        (CASUAL_DINING, 'casual_dining'),
        (PREMIUM_CASUAL, 'premium_casual'),
        (FAMILY_STYLE, 'family_style'),
        (FINE_DINING, 'fine_dining'),
        (PUB, 'pub'),
    ]
    name = models.CharField(max_length=100)
    category = models.TextField(max_length=2, choices=CATEGORIES_CHOICES)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=20)
    website = models.CharField(max_length=150, blank=True, null=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    opening_hours = models.CharField(max_length=50)
    price_level = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(null=True, blank=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='owner_restaurants')
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Item ID {self.pk}: Name {self.name}'
