from django.urls import path

from apps.general.views import ListTopFourRestaurants, GeneralSearchView

urlpatterns = [
    path('home/', ListTopFourRestaurants.as_view(), name='Get-4-best-rated-restaurants'),
    path('search/', GeneralSearchView.as_view(), name='filter-restaurants/reviews/users'),
]
