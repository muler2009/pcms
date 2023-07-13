from rest_framework import serializers, status
from rest_framework.response import Response
# from .models import UsersProfile
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView

UserAuthentiacation = get_user_model()


# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UsersProfile

#         exclude = ['user']


class UsersSerializer(serializers.ModelSerializer):
    # profile = UserProfileSerializer()

    class Meta:
        model = UserAuthentiacation
        fields = '__all__'

        # overiding the creation process of the user instance based on manager


class UserTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if not user:
            return Response({'error': "User is not available"}, status=status.HTTP_404_NOT_FOUND)
        token = super().get_token(user)

        # claims added in the token
        token['username'] = user.username

        return token

# user registration serializer form the front end
