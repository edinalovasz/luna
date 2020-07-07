from django.db.models import Avg, Count
from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from apps.registrations.permissions import CanBeAnonymous
from apps.restaurants.models import Restaurant
from apps.restaurants.serializer import RestaurantSerializer


class ListTopFourRestaurants(ListAPIView):
    """
    GET:
    List the top 4 rated reviews.
    """
    permission_classes = [CanBeAnonymous]
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):

        queryset = Restaurant.objects.annotate(count=Count('restaurant_reviews')).order_by('-count').all()[:4]

        # queryset = Restaurant.objects.filter(
        #     restaurant_reviews__rating=Restaurant.objects.order_by('restaurant_reviews__rating')[9].restaurant_reviews
        # )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
