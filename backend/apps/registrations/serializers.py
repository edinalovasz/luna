from rest_framework import serializers

from backend.apps.registrations.models import Registration


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['email']

