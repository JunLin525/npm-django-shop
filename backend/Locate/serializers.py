from .models import comment, shop
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = comment
        fields ="__all__"

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = shop
        fields = "__all__"