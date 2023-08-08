from django.shortcuts import render
from rest_framework import generics
from .models import shop, comment
from .serializers import ShopSerializer, CommentSerializer
from django_filters import rest_framework as filters
from rest_framework.pagination import PageNumberPagination
# Create your views here.

# 增加Filter排序方式


# class StandardResultsSetPagination(PageNumberPagination):
# page_size = 10
# page_size_query_param = 'page_size'
# max_page_size = 1000


class ShopFilter(filters.FilterSet):
    max_price = filters.NumberFilter(field_name="Price", lookup_expr='lte')
    max_people = filters.NumberFilter(field_name="People", lookup_expr='lte')
    max_rating = filters.NumberFilter(field_name="Rating", lookup_expr='lte')

    # class Meta:
    # model = shop
    # fields = {
    # 'Introduction': ['icontains'],
    # }


class ShopPostList(generics.ListAPIView):
    queryset = shop.objects.all()
    serializer_class = ShopSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    # pagination_class = StandardResultsSetPagination
    filterset_class = ShopFilter


class ShopPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = shop.objects.all()
    serializer_class = ShopSerializer


class CommentPostList(generics.ListAPIView):
    queryset = comment.objects.all()
    serializer_class = CommentSerializer


class CommentPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = comment.objects.all()
    serializer_class = CommentSerializer
