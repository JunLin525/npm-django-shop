from django.shortcuts import render
from django.urls import path, include
# Create your views here.

urlpatterns=[
    path("Locate/", include("Locate.urls")),
]