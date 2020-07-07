from django.db.models import Avg
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from apps.registrations.permissions import CanBeAnonymous
from apps.restaurants.models import Restaurant
from apps.restaurants.serializer import RestaurantSerializer


class ListTopFourRestaurants(ListAPIView):
    permission_classes = [CanBeAnonymous]
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.annotate(Avg('restaurant_reviews')).order_by('restaurant_reviews__avg').all()[:4]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
