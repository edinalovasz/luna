from django.urls import path

from apps.comments.views import CreateCommentView, DeleteCommentView, ToggleLikeCommentVew, ListCommentsOfSpecificUser

urlpatterns = [
    path('new/<int:review_id>/', CreateCommentView.as_view(), name='Create-Comment'),
    path('<int:comment_id>/', DeleteCommentView.as_view(), name='Delete-Comment'),
    path('like/<int:comment_id>/', ToggleLikeCommentVew.as_view(), name='Toggle-like-Comment'),
    path('user/<int:user_id>/', ListCommentsOfSpecificUser.as_view(), name='List-specific-user-comments'),
]
