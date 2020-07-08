from django.urls import path

from apps.restaurantreviews.views import CreateRestaurantReviewView, ListSpecificRestaurantReviewsView, \
    ListSpecificUserReviewsView, RetrieveUpdateDestroyReview, ToggleLikeReviewVew, ListReviewsUserLikesView, \
    ListReviewsUserCommentedView, ListCommentsOfSpecificReview, ListAllReviewsView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateRestaurantReviewView.as_view(), name='Create-restaurant-review'),
    path('restaurant/<int:restaurant_id>/', ListSpecificRestaurantReviewsView.as_view(), name='get-reviews-of-restaurant'),
    path('user/<int:user_id>/', ListSpecificUserReviewsView.as_view(), name='get-reviews-of-a-user'),
    path('', ListAllReviewsView.as_view(), name='list-all-reviews'),
    path('<int:review_id>/', RetrieveUpdateDestroyReview.as_view(), name='edit-patch-get-review'),
    path('like/<int:review_id>/', ToggleLikeReviewVew.as_view(), name='toggle-like-review'),
    path('likes/', ListReviewsUserLikesView.as_view(), name='list-current-user-liked-reviews'),
    path('comments/', ListReviewsUserCommentedView.as_view(), name='list-user-commented-reviews'),
    path('comments/<int:review_id>/', ListCommentsOfSpecificReview.as_view(), name='list-comments-of-a-review'),
]