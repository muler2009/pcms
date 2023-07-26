from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import generics, permissions, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import UserProfile
from .serializers import UserProfileSerializer
# Create your views here.


class GetUsersProfile(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        # queryset = UserProfile.objects.filter(first_name__startswith='M')
        queryset = UserProfile.objects.all()
        return queryset


@method_decorator(csrf_protect, name='dispatch')
class RegisterUserView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def create(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
