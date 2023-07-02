from rest_framework import serializers, status
from rest_framework.response import Response
# from .models import Users
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

Users = get_user_model()


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class UserTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if not user:
            return Response({'error': "User is not available"}, status=status.HTTP_404_NOT_FOUND)
        token = super().get_token(user)

        # claims added in the token
        token['username'] = user.username

        return token


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }
