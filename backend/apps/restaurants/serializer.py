from rest_framework import serializers
from apps.restaurants.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'image', 'owner', 'created']
        read_only_fields = ['email']
