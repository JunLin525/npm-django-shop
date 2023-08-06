from django.urls import path, include
from .views import CommentPostDetail, CommentPostList
from .views import ShopPostList, ShopPostDetail


urlpatterns = [
    path("Detail/<int:pk>/", ShopPostDetail.as_view(), name="Shop_Detail"),
    path("List", ShopPostList.as_view(), name="Shop_List"),
    path("Comment-Detail/<int:pk>/",
         CommentPostDetail.as_view(), name="Comment_Detail"),
    path("Comment_List", CommentPostList.as_view(), name="Comment_List")
]
