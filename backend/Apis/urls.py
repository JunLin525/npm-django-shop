from django.urls import path,include

urlpatterns =[
    path('Locate/', include("Locate.urls")),
    path('foodie-Area/', include("foodie.urls")),
]