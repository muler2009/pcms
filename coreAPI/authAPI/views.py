from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.request import Request
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserTokenObtainPairSerializer


# Create your views here.


class UserTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserTokenObtainPairSerializer


class UserLogoutView(generics.CreateAPIView):
    def create(self, request: Request, *args, **kwargs):
        refresh_token = request.data.get('refresh_token')
        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
                return Response({'message': 'Logout successful.'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Refresh token not provided.'}, status=status.HTTP_400_BAD_REQUEST)


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
