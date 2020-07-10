from django.contrib.auth import get_user_model
from django.db import models
from apps.restaurantreviews.models import RestaurantReview

User = get_user_model()


class Comment(models.Model):
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    restaurant_review = models.ForeignKey(to=RestaurantReview, on_delete=models.CASCADE, related_name='comments',
                                          null=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, blank=True, null=True,
                               related_name='author_comments')
    likes = models.ManyToManyField(to=User, related_name='liked_comments')

    def __str__(self):
        return f'Item ID {self.pk}: {self.author}'
