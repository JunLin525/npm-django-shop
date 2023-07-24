from django.urls import path
from .views import AreaPostList,AreaPostDetail
from .views import ReplyPostList,ReplyPostDetail
urlpatterns =[
    path("Area-Detail/<uuid:pk>/", AreaPostDetail.as_view(), name="Area_Detail"),
    path("Area-List", AreaPostList.as_view(), name="Area_List"),
    path("Reply-Detail/<uuid:pk>/", ReplyPostDetail.as_view(), name="Reply_Detail"),
    path("Reply-List",ReplyPostList.as_view(), name="Reply_List"),
]