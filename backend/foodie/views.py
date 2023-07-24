from django.shortcuts import render
from rest_framework import generics
from .models import Area, Reply
from .serilizers import AreaSerializer,ReplySerializer
# Create your views here.

class AreaPostList(generics.ListCreateAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer

class AreaPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer

class ReplyPostList(generics.ListAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer

class ReplyPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
    