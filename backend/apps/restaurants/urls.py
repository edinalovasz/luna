from django.urls import path

from apps.restaurants.views import CreateRestaurantsView, RetrieveUpdateDestroyRestaurant, ListAllRestaurantsView, \
    ListAllRestaurantsByCategoryView, ListSpecificUserRestaurantsView

urlpatterns = [
    path('', ListAllRestaurantsView.as_view(), name='List-all-restaurants'),
    path('new/', CreateRestaurantsView.as_view(), name='Create-restaurants'),
    path('category/', ListAllRestaurantsByCategoryView.as_view(), name='List-Restaurant-by-Category'),
    path('user/<int:user_id>/', ListSpecificUserRestaurantsView.as_view(), name='Get-specific-users-restaurants'),
    path('<int:restaurant_id>/', RetrieveUpdateDestroyRestaurant.as_view(), name='retrieve-update-delete-restaurant'),
]
