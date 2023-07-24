from django.urls import path
from .views import CommentPostDetail,CommentPostList
from .views import ShopPostList,ShopPostDetail

urlpatterns =[
    path("Shop-Detail/<int:pk>/", ShopPostDetail.as_view(), name="Shop_Detail"),
    path("Shop-List", ShopPostList.as_view(), name="Shop_List"),
    path("Comment-Detail/<int:pk>/", CommentPostDetail.as_view(), name="Comment_Detail"),
    path("Comment_List",CommentPostList.as_view(), name="Comment_List")
]