from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Restaurant(models.Model):
    ETHNIC = "1"
    FAST_FOOD = "2"
    FAST_CASUAL = "3"
    CASUAL_DINING = "4"
    PREMIUM_CASUAL = "5"
    FAMILY_STYLE = "6"
    FINE_DINING = "7"
    PUB = "8"
    CATEGORIES_CHOICES = [
        (ETHNIC, 'Ethnic'),
        (FAST_FOOD, 'Fast Food'),
        (FAST_CASUAL, 'Fast Casual'),
        (CASUAL_DINING, 'Casual Dining'),
        (PREMIUM_CASUAL, 'Premium Casual'),
        (FAMILY_STYLE, 'Family Style'),
        (FINE_DINING, 'Fine Dining'),
        (PUB, 'Pub'),
    ]
    name = models.CharField(max_length=100)
    category_id = models.TextField(max_length=2, choices=CATEGORIES_CHOICES)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=20)
    website = models.CharField(max_length=150, blank=True, null=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    opening_hours = models.CharField(max_length=50)
    price_level = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(null=True, blank=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='owned_restaurants')
    created = models.DateTimeField(auto_now_add=True)


    def no_of_ratings(self):
        return self.restaurant_reviews.count()

    def avg_rating(self):
        sum = 0
        reviews = self.restaurant_reviews.all()
        for review in reviews:
            sum += review.rating
        if len(reviews) > 0:
            return sum / len(reviews)
        else:
            return 0

    def __str__(self):
        return f'Item ID {self.pk}: Name {self.name}'
