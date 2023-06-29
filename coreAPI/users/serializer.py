from rest_framework import serializers
# from .models import Users
from django.contrib.auth import get_user_model

Users = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):
    pass


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
