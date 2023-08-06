from rest_framework.pagination import PageNumberPagination
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters
from rest_framework import generics
from .models import Area, Reply
from .serilizers import AreaSerializer, ReplySerializer
# Create your views here.


class AreaPostList(generics.ListCreateAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer


class AreaPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer


# class AreaPostListPrice(viewsets.ModelViewSet):
# queryset = Area.objects.all()
# serializer_class = AreaSerializer
# filter_backends = [filters.SearchFilter]
# filterset_fields = ["Name", "Address", "Country", "Introduction"]


class ReplyPostList(generics.ListAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer


class ReplyPostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer
