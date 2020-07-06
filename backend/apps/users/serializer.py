from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    amount_of_reviews = serializers.SerializerMethodField()
    # amount_of_comments = serializers.SerializerMethodField()
    # amount_of_likes = serializers.SerializerMethodField()

    def get_amount_of_reviews(self, obj):
        return len(obj.RestaurantReview.all())

    # def get_amount_of_comments(self, obj):
    #     return len(obj.posts.all())
    #
    # def get_amount_of_likes(self, obj):
    #     return len(obj.liked_posts.all())

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'location', 'about_me', 'avatar', 'phone_number', 'things_user_loves', 'amount_of_reviews']
        read_only_fields = ['email']
