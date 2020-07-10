from rest_framework import permissions
from rest_framework.permissions import BasePermission


class AllowCreateRegistrationProfile(permissions.BasePermission):

    def has_permission(self, request, view):
        return True


class CanBeAnonymous(BasePermission):
    def has_object_permission(self, request, view, obj):
        return True
