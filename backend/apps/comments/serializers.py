from rest_framework import serializers

from apps.comments.models import Comment
from apps.users.serializer import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    amount_of_likes = serializers.SerializerMethodField()
    is_from_logged_in_user = serializers.SerializerMethodField()
    author = UserSerializer(required=False, read_only=True)
    restaurant_name = serializers.SerializerMethodField()
    restaurant_id = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        return len(obj.likes.all())

    def get_is_from_logged_in_user(self, obj):
        return self.context.get('request').user == obj.author

    def get_restaurant_name(self, obj):
        return obj.restaurant_review.restaurant.name

    def get_restaurant_id(self, obj):
        return obj.restaurant_review.restaurant.id

    class Meta:
        model = Comment

        fields = [
            'id',
            'content',
            'restaurant_name',
            'restaurant_id',
            'is_from_logged_in_user',
            'amount_of_likes',
            'created',
            'author',
        ]


class Top2CommentSerializer(serializers.ModelSerializer):
    amount_of_likes = serializers.SerializerMethodField()

    author = UserSerializer(required=False, read_only=True)

    def get_amount_of_likes(self, obj):
        return len(obj.likes.all())

    class Meta:
        model = Comment

        fields = [
            'id',
            'content',
            'amount_of_likes',
            'created',
            'author',
        ]
