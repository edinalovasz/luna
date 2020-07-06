from django.contrib.auth import get_user_model
from django.core.mail import send_mail, EmailMessage
from rest_framework import status
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.response import Response

from apps.registrations.models import Registration
from apps.registrations.permissions import AllowCreateRegistrationProfile
from apps.registrations.serializers import RegistrationSerializer, RegistrationValidationSerializer

from apps.registrations.models import code_generator

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
    serializer_class = RegistrationValidationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(serializer.validated_data)
        return Response("Your account has been created!")


class CreateValidationCodeForPasswordReset(CreateAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        try:
            target_profile = Registration.objects.get(email=request.data['email'])
            target_profile.code = code_generator()
            target_profile.save()
            email = EmailMessage()
            email.subject = 'Your password Reset code'
            email.body = f'See your password reset code:{target_profile.code}'
            email.to = [target_profile.email]
            email.send(fail_silently=False)
            return Response(status=status.HTTP_201_CREATED)
        except Registration.DoesNotExist:
            return Response({"detail": "Your email isn't valid."}, status=status.HTTP_400_BAD_REQUEST)


class PasswordResetValidation(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(
            serializer.validated_data,
        )
        return Response(status=status.HTTP_200_OK)
