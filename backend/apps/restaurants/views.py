from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from apps.restaurants.models import Restaurant
from apps.restaurants.serializer import RestaurantSerializer
from luna_project.permissions import UserIsOwnerOrAdmin

User = get_user_model()


class ListCreateRestaurants(ListCreateAPIView):
    """
    get:
    List all Restaurants.
    post:
    Create a new Restaurant.
    """

    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RetrieveUpdateDestroyRestaurant(RetrieveUpdateDestroyAPIView):
    """
    update:
    Update Restaurant.

    delete:
    Delete Restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)

    def get_permissions(self):
        if self.request.method == 'GET':
            permission_classes = [IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [UserIsOwnerOrAdmin]
        return [permission() for permission in permission_classes]



