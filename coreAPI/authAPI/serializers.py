from django.contrib.auth.hashers import make_password
from rest_framework import serializers, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

# from rest_framework_simplejwt.views import TokenObtainPairView

User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'username', 'password')

    def validate(self, data):
        """
            Validating the user password with the validate_password method and raise exception in case an error occurs
        """
        user = User(**data)
        password = data.get('password')
        try:
            validate_password(password, user)
        except exceptions.ValidationError as ex:
            serializer_errors = serializers.as_serializer_error(ex)
            raise exceptions.ValidationError(
                {'password': serializer_errors['non_field_errors']}
            )
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
        )

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username']


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
