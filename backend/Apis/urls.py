from django.urls import path, include
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)
urlpatterns = [
    path('Locate/', include("Locate.urls")),
    path('foodie-Area/', include("foodie.urls")),
    path('schema/', SpectacularAPIView.as_view(), name="schema"),
    path('schema/swagger-ui/',
         SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
