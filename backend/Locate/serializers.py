from .models import comment, shop
from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    class Meta:
        model = comment
        fields ="__all__"

class ShopSerializer(serializers.Serializer):
    class Meta:
        model = shop
        fields = "__all__"