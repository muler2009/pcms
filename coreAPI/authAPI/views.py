from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.request import Request
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserTokenObtainPairSerializer
from django.contrib.auth.views import LogoutView


# Create your views here.


class UserTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserTokenObtainPairSerializer


class CustomLogoutView(LogoutView):
    def dispatch(self, request, *args, **kwargs):
        # Call the parent dispatch method to log the user out
        response = super().dispatch(request, *args, **kwargs)

        # Get the refresh token from the request's cookies or headers
        refresh_token = request.COOKIES.get('refresh_token') or request.headers.get(
            'Authorization', '').split(' ')[1]

        if refresh_token:
            # Blacklist the refresh token to prevent it from being used again
            token = RefreshToken(refresh_token)
            token.blacklist()

            # Include the refresh token in the response
            # response.set_cookie('refresh_token', '', max_age=0)
            # response.data = {'refresh_token': refresh_token}

        return Response({'message: Loggedout successfully'})


class RegisterNewUser(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UsersSerializer

    def create(self, request: Request, *args, **kwargs):
        # creating the new serializer instastance with the incoming data
        serializer = self.get_serializer(data=request.data)
        # Checking if the request data is valid
        if serializer.is_valid():
            newUser = serializer.save()  # save to the User Model
            if newUser:
                # Response Upon successful creation
                return Response(status=status.HTTP_201_CREATED)
            # Response if there is some errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserIndex(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
