from django.shortcuts import render
from rest_framework import generics
from .models import Users
from .serializer import UsersSerializer

# Create your views here.


class UserIndex(generics.ListAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
