from rest_framework import serializers

from apps.registrations.models import Registration


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['email']


class RegistrationValidationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['email', 'code']
