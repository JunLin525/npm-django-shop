from django.shortcuts import render
from rest_framework import generics
from .models import shop, comment
from .serializers import ShopSerializer,CommentSerializer
# Create your views here.

class ShopPostList(generics.ListCreateAPIView):
    queryset = shop.objects.all()
    serializer_class = ShopSerializer

class ShopPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = shop.objects.all()
    serializer_class = ShopSerializer

class CommentPostList(generics.ListAPIView):
    queryset = comment.objects.all()
    serializer_class = CommentSerializer

class CommentPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = comment.objects.all()
    serializer_class = CommentSerializer
    