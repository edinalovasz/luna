from django.urls import path

from apps.restaurants.views import ListCreateRestaurants, RetrieveUpdateDestroyRestaurant

urlpatterns = [
    path('', ListCreateRestaurants.as_view(), name='listCreate-restaurants'),
    path('<int:restaurant_id>/', RetrieveUpdateDestroyRestaurant.as_view(), name='retrieve-update-delete-restaurant'),
]

