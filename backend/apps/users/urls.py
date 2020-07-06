from django.urls import path

from apps.users.views import ListUsers, RetrieveUser, RetrieveUpdateDestroyLoggedInUser

urlpatterns = [
    path('list', ListUsers.as_view(), name='list-users'),
    path('<int:user_id>/', RetrieveUser.as_view(), name='retrieve-user'),
    path('me/', RetrieveUpdateDestroyLoggedInUser.as_view(), name='retrieve-update-destroy-logged-in-user'),
]
