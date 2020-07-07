from rest_framework import serializers

from apps.comments.serializers import CommentSerializer
from apps.restaurantreviews.models import RestaurantReview
from apps.restaurants.serializer import RestaurantSerializer
from apps.users.serializer import UserSerializer


class RestaurantReviewSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False, read_only=True)
    restaurant = RestaurantSerializer(required=False, read_only=True)
    is_from_logged_in_user = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()

    def get_commments(self, obj):
        
    comments = CommentSerializer(many=True)

    def get_amount_of_likes(self, obj):
        return len(obj.likes.all())

    def get_is_from_logged_in_user(self, obj):
        return self.context.get('request').user == obj.author

    def get_amount_of_comments(self, obj):
        return obj.comments.count()

    class Meta:
        model = RestaurantReview

        fields = [
            'id',
            'content',
            'is_from_logged_in_user',
            'amount_of_comments',
            'amount_of_likes',
            'rating',
            'created',
            'comments',
            'author',
            'restaurant'
        ]
