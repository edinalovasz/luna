from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    amount_of_reviews = serializers.SerializerMethodField()
    amount_of_comments = serializers.SerializerMethodField()
    amount_of_reviews_liked = serializers.SerializerMethodField()
    amount_of_comments_liked = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return obj.author_reviews.count()

    def get_amount_of_comments(self, obj):
        return obj.author_comments.count()

    def get_amount_of_reviews_liked(self, obj):
        return obj.liked_reviews.count()

    def get_amount_of_comments_liked(self, obj):
        return obj.liked_comments.count()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name',
                  'last_name', 'location', 'about_me', 'avatar', 'date_joined', 'banner', 'phone_number',
                  'amount_of_reviews', 'amount_of_comments', 'amount_of_reviews_liked',
                  'amount_of_comments_liked', 'things_user_loves']
        extra_kwargs = {
            'email': {'read_only': True},
        }
