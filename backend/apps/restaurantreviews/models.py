from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.restaurants.models import Restaurant

User = get_user_model()


class RestaurantReview(models.Model):
    content = models.TextField()
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='restaurant_reviews')
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, null=False, related_name='author_reviews')
    likes = models.ManyToManyField(to=User, related_name='liked_reviews')

    def __str__(self):
        return f'Review ID {self.pk}'
