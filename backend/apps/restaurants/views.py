from django.contrib.auth import get_user_model
from rest_framework import status, filters, generics
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response


from apps.restaurants.models import Restaurant
from apps.restaurants.permissions import IsOwnerOrAdminOrReadOnly
from apps.restaurants.serializer import RestaurantSerializer
from apps.users.permissions import ReadOnly

User = get_user_model()


class CreateRestaurantsView(CreateAPIView):
    """
    get:
    List all Restaurants.
    post:
    Create a new Restaurant.
    """
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated | ReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=self.request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListAllRestaurantsView(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated | ReadOnly]

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.all().order_by('-created')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListAllRestaurantsByCategoryView(generics.ListCreateAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated | ReadOnly]
    search_fields = ['category_id']
    filter_backends = (filters.SearchFilter,)
    queryset = Restaurant.objects.all().order_by('-created')


class RetrieveUpdateDestroyRestaurant(RetrieveUpdateDestroyAPIView):
    """
    UPDATE:
    Update Restaurant.
    GET:
    Retrieve single Restaurant.
    DELETE:
    Delete Restaurant.
    """
    permission_classes = [IsOwnerOrAdminOrReadOnly]
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'restaurant_id'
    http_method_names = ['get', 'patch', 'delete']

    def perform_update(self, serializer):
        serializer.save(owner=self.request.user)


class ListSpecificUserRestaurantsView(ListAPIView):
    permission_classes = [IsAuthenticated | ReadOnly]
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        user_obj = User.objects.get(id=user_id)
        return user_obj.owned_restaurants.all().order_by('-created')
