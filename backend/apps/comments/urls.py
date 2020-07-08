from django.urls import path

from apps.comments.views import CreateCommentView, DeleteCommentView, ToggleLikeCommentVew

urlpatterns = [
    path('new/<int:review_id>/', CreateCommentView.as_view(), name='Create-Comment'),
    path('<int:comment_id>/', DeleteCommentView.as_view(), name='Delete-Comment'),
    path('like/<int:comment_id>/', ToggleLikeCommentVew.as_view(), name='Toggle-like-Comment'),
]
