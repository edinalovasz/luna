from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import generics, filters
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from apps.registrations.permissions import CanBeAnonymous
from apps.restaurantreviews.models import RestaurantReview
from apps.restaurantreviews.serializers import RestaurantReviewSerializer
from apps.restaurants.models import Restaurant
from apps.restaurants.serializer import RestaurantSerializer
from apps.users.serializer import UserSerializer

User = get_user_model()


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


class GeneralSearchView(ListAPIView):
    permission_classes = [CanBeAnonymous]

    def get_serializer_class(self):
        type = self.request.query_params.get('type')
        if type == "restaurants":
            return RestaurantSerializer
        elif type == "reviews":
            return RestaurantReviewSerializer
        elif type == "users":
            return UserSerializer
        else:
            return RestaurantSerializer

    def list(self, request, *args, **kwargs):
        param = self.request.query_params.get('search_string')
        type = self.request.query_params.get('type')
        if type == "restaurants":
            results = Restaurant.objects.filter(
                Q(name__icontains=param) | Q(street__icontains=param) | Q(country__icontains=param) | Q(
                    city__icontains=param) | Q(zip__icontains=param) | Q(
                    owner__first_name__icontains=param) | Q(
                    owner__last_name__icontains=param) | Q(
                    owner__username__icontains=param))
        elif type == "reviews":
            results = RestaurantReview.objects.filter(Q(content__icontains=param) | Q(
                author__first_name__icontains=param) | Q(
                author__last_name__icontains=param) | Q(
                author__username__icontains=param))
        elif type == "users":
            results = User.objects.filter(
                Q(first_name__icontains=param) | Q(last_name__icontains=param) | Q(username__icontains=param))
        else:
            results = []
        serializer = self.get_serializer(results, many=True)
        return Response(serializer.data)
