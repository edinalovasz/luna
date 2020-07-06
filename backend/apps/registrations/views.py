from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response

from backend.apps.registrations.models import Registration
from backend.apps.registrations.serializers import RegistrationSerializer

User = get_user_model()


class RequestForRegistration(CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [AllowCreateRegistrationProfile]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        target_profile = Registration.objects.get(email=request.data['email'])
        send_mail(
            'Thanks for registering',
            f'See your account creation code: {target_profile.code}',
            'students@propulsionacademy.com',
            [request.data['email']],
            fail_silently=False,
        )
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class RegistrationValidation(GenericAPIView):
    permission_classes = []
    serializer_class = CodeValidationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response(status=status.HTTP_200_OK)


class PasswordReset(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.send_password_reset_email()
        return Response(status=status.HTTP_200_OK)


class PasswordResetValidation(GenericAPIView):
    permission_classes = []
    serializer_class = PasswordResetValidationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(
            serializer.validated_data,
        )
        return Response(status=status.HTTP_200_OK)
