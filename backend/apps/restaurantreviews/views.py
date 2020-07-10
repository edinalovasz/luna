# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.comments.serializers import CommentSerializer
from apps.restaurantreviews.models import RestaurantReview
from apps.restaurantreviews.permissions import IsAuthorOrAdminOrReadOnly, CannotLikeOwnReview
from apps.restaurantreviews.serializers import RestaurantReviewSerializer
from apps.restaurants.models import Restaurant
from apps.users.permissions import ReadOnly

User = get_user_model()


class CreateRestaurantReviewView(CreateAPIView):
    """
    post:
    Create a new Restaurant Review.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [IsAuthenticated | ReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        restaurant_id = self.kwargs['restaurant_id']
        target_restaurant = Restaurant.objects.get(id=restaurant_id)
        serializer.save(author=self.request.user, restaurant=target_restaurant)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListAllReviewsView(ListAPIView):
    """
    GET:
    List all the Reviews in the db
    """
    serializer_class = RestaurantReviewSerializer
    queryset = RestaurantReview.objects.all()
    permission_classes = []

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListSpecificRestaurantReviewsView(ListAPIView):
    """
    GET:
    List the reviews of a specific restaurant by providing the restaurant ID.
    """
    permission_classes = [IsAuthenticated | ReadOnly]
    serializer_class = RestaurantReviewSerializer

    def get_queryset(self):
        restaurant_id = self.kwargs['restaurant_id']
        target_restaurant = Restaurant.objects.get(id=restaurant_id)
        return target_restaurant.restaurant_reviews.all().order_by('-created')


class ListSpecificUserReviewsView(ListAPIView):
    """
    GET:
    List the reviews of a specific user by providing the user's ID.
    """
    permission_classes = [IsAuthenticated | ReadOnly]
    serializer_class = RestaurantReviewSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        target_author = User.objects.get(id=user_id)
        return target_author.author_reviews.all().order_by('-created')


class RetrieveUpdateDestroyReview(RetrieveUpdateDestroyAPIView):
    """
    UPDATE:
    Update a Review(author only).
    GET:
    Retrieve single Review.
    DELETE:
    Delete Review(author only).
    """
    permission_classes = [IsAuthorOrAdminOrReadOnly]
    queryset = RestaurantReview
    serializer_class = RestaurantReviewSerializer
    lookup_url_kwarg = 'review_id'
    http_method_names = ['get', 'patch', 'delete']

    def perform_update(self, serializer):
        serializer.save(author=self.request.user)


class ToggleLikeReviewVew(CreateAPIView):
    """
    POST:
    Toggle liking a review by including the target review in the url(cannot like own review).
    """
    permission_classes = [IsAuthenticated | ReadOnly]
    queryset = RestaurantReview
    serializer_class = RestaurantReviewSerializer
    lookup_url_kwarg = 'review_id'

    def post(self, request, *args, **kwargs):
        receiver = self.get_object()  # We found the post with 'post_id'
        requester = self.request.user
        like_relation = requester in receiver.likes.all()
        if like_relation:
            receiver.likes.remove(requester)
        else:
            receiver.likes.add(requester)
        return Response(self.get_serializer(receiver).data)


class ListReviewsUserLikesView(ListAPIView):
    permission_classes = [IsAuthenticated | ReadOnly]
    serializer_class = RestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = request.user.liked_reviews.all().order_by('-created')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListReviewsUserCommentedView(ListAPIView):
    permission_classes = []
    serializer_class = RestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        target_reviews = RestaurantReview.objects.filter(comments__author=request.user).order_by('-created')
        serializer = self.get_serializer(target_reviews, many=True)
        return Response(serializer.data)


class ListCommentsOfSpecificReview(ListAPIView):
    permission_classes = []
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'
    queryset = RestaurantReview

    def list(self, request, *args, **kwargs):
        target_review = self.get_object()
        target_comments = target_review.comments.all()
        serializer = self.get_serializer(target_comments, many=True)
        return Response(serializer.data)
