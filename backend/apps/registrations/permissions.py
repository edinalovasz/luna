from rest_framework import permissions
from rest_framework.permissions import BasePermission


class AllowCreateRegistrationProfile(permissions.BasePermission):

    def has_permission(self, request, view):
        return True


class IsOwnerOrAdminOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return True
        return obj.owner == request.user or request.user.is_staff
