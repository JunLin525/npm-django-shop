from django.shortcuts import render
from rest_framework import generics
from .models import shop, comment
from .serializers import ShopSerializer, CommentSerializer
from django_filters import rest_framework as filters
# Create your views here.

# 增加Filter排序方式


class ShopFilter(filters.FilterSet):
    min_price = filters.NumberFilter(field_name="Price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="Price", lookup_expr='lte')
    min_people = filters.NumberFilter(field_name="People", lookup_expr='gte')
    max_people = filters.NumberFilter(field_name="People", lookup_expr='lte')
    min_rating = filters.NumberFilter(field_name="Rating", lookup_expr='gte')
    max_rating = filters.NumberFilter(field_name="Rating", lookup_expr='lte')

    class Meta:
        model = shop
        fields = {
            'Name': ['exact', 'icontains'],
            'Price': ['exact', 'icontains'],
            'People': ['exact', 'icontains'],
            'Address': ['exact', 'icontains'],
            'Country': ['exact', 'icontains'],
            'Rating': ['exact', 'icontains'],
            'Introduction': ['icontains'],
        }


class ShopPostList(generics.ListAPIView):
    queryset = shop.objects.all()
    serializer_class = ShopSerializer
    filter_backends = (filters.DjangoFilterBackend,)
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
