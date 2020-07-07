from rest_framework import generics
from rest_framework.response import Response

from apps.registrations.permissions import CanBeAnonymous
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
