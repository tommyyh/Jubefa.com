from rest_framework import serializers
from .models import Subscriber

class SubscribersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Subscriber
    fields = '__all__'