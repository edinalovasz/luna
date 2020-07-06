from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    amount_of_reviews = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()
    amount_of_reviews_likes = serializers.SerializerMethodField()
    amount_of_comments_likes = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return obj.author_reviews.count()

    def get_amount_of_comments(self, obj):
        return obj.author_comments.count()

    def get_amount_of_reviews_likes(self, obj):
        return obj.liked_reviews.count()

    def get_amount_of_comments_likes(self, obj):
        return obj.liked_comments.count()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'location', 'about_me', 'avatar', 'phone_number',
                  'amount_of_reviews', 'amount_of_comments', 'amount_of_reviews_likes',
                  'amount_of_comments_likes', 'things_user_loves']
        read_only_fields = ['email']
