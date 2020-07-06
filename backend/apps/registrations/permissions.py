from rest_framework import permissions


class AllowCreateRegistrationProfile(permissions.BasePermission):

    def has_permission(self, request, view):
        return True
