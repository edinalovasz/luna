from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from apps.registrations.views import RequestForRegistration, RegistrationValidation

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view()),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('token/verify/', jwt_views.TokenVerifyView.as_view()),
    path('registration/', RequestForRegistration.as_view()),
    path('registration/validation/', RegistrationValidation.as_view()),
]
