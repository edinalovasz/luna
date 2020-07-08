from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.comments.models import Comment
from apps.comments.persmissions import CannotLikeOwnComment
from apps.comments.serializers import CommentSerializer
from apps.restaurantreviews.models import RestaurantReview
from apps.restaurantreviews.permissions import IsAuthorOrAdminOrReadOnly
from apps.users.permissions import ReadOnly

User = get_user_model()


class CreateCommentView(CreateAPIView):
    """
    post:
    Create a comment on a Review by providing the review ID in the url.
    """
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated | ReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        review_id = self.kwargs['review_id']
        target_review = RestaurantReview.objects.get(id=review_id)
        serializer.save(author=self.request.user, restaurant_review=target_review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DeleteCommentView(DestroyAPIView):
    """
    DELETE:
    Delete Comment(author only).
    """
    permission_classes = [IsAuthorOrAdminOrReadOnly]
    queryset = Comment
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    http_method_names = ['delete']


class ToggleLikeCommentVew(CreateAPIView):
    """
    POST:
    Toggle liking a comment by including the target comment ID in the url(cannot like own review).
    """
    permission_classes = [CannotLikeOwnComment]
    queryset = Comment
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'

    def post(self, request, *args, **kwargs):
        receiver = self.get_object()  # We found the post with 'post_id'
        requester = self.request.user
        like_relation = requester in receiver.likes.all()
        if like_relation:
            receiver.likes.remove(requester)
        else:
            receiver.likes.add(requester)
        return Response(self.get_serializer(receiver).data)


class ListCommentsOfSpecificUser(ListAPIView):
    permission_classes = []
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'
    queryset = User

    def list(self, request, *args, **kwargs):
        target_user = self.get_object()
        target_comments = target_user.author_comments.all()
        serializer = self.get_serializer(target_comments, many=True)
        return Response(serializer.data)



