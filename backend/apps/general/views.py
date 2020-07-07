from django.db.models import Avg, Count, Subquery
from django.db.models.functions import Coalesce
from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.fields import DecimalField
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from apps.registrations.permissions import CanBeAnonymous
from apps.restaurantreviews.models import RestaurantReview
from apps.restaurants.models import Restaurant
from apps.restaurants.serializer import RestaurantSerializer


class ListTopFourRestaurants(generics.ListAPIView):
    """
    GET:
    List the top 4 rated reviews.
    """
    permission_classes = [CanBeAnonymous]
    serializer_class = RestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = sorted(Restaurant.objects.all(), key=lambda m: (m.avg_rating, m.no_of_ratings), reverse=True)[:4]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
