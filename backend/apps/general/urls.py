from django.urls import path

from apps.general.views import ListTopFourRestaurants

urlpatterns = [
    path('home/', ListTopFourRestaurants.as_view(), name='Get-4-best-rated-restaurants'),
]