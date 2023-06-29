from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.request import Request
from rest_framework.response import Response
from .models import Users
from .serializer import UsersSerializer

# Create your views here.


class NewUserCreate(generics.CreateAPIView):
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
