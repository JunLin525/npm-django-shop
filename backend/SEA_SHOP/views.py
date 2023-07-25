from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from django.shortcuts import render
from dj_rest_auth.registration.views import SocialLoginView
from django.views.generic import TemplateView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class Home(TemplateView):
    template_name="home.html"