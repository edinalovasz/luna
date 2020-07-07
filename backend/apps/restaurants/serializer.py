from rest_framework import serializers
from apps.restaurants.models import Restaurant
from apps.users.serializer import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = UserSerializer(required=False, read_only=True)
    is_from_logged_in_user = serializers.SerializerMethodField()
    category = serializers.CharField(source='get_category_id_display', required=False)

    def get_is_from_logged_in_user(self, obj):
        return self.context.get('request').user == obj.owner

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category_id', 'category', 'street', 'city', 'no_of_ratings',
                  'avg_rating', 'zip',
                  'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'image', 'is_from_logged_in_user', 'created', 'owner']
        read_only_fields = ['email']
