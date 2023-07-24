from rest_framework import serializers
from .models import Area,Reply
class AreaSerializer(serializers.Serializer):
    class Meta:
        model = Area
        fields="__all__"

class ReplySerializer(serializers.Serializer):
    class Meta:
        model = Reply
        fields = "__all__"