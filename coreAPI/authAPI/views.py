from django.shortcuts import render
from rest_framework import generics, authentication, permissions, status, views
from django.http import JsonResponse
from rest_framework.request import Request
from rest_framework.response import Response
from .models import UserAuthentiacation
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserTokenObtainPairSerializer, UsersSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.middleware.csrf import get_token
from user_profile.models import UserProfile
from user_profile.serializers import UserProfileSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator
# Generate the csrf_token and send to the front end


@method_decorator(ensure_csrf_cookie, name='dispatch')
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


class SetCookieView(views.APIView):
    # authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        csrftoken = request.COOKIES.get('csrftoken')
        if csrftoken is None:
            csrftoken = get_token(request)
            response = JsonResponse(
                {"message": "Cookie set!"}, safe=False)
            response.set_cookie('csrftoken', csrftoken)
            return response
        return JsonResponse({"message": "Cookie already exists!", "csrftoken": csrftoken}, safe=False)


@method_decorator(csrf_exempt, name='dispatch')
class RegisterUserView(generics.CreateAPIView):
    serializer_class = UserProfileSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def create(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            user_profile = UserProfile(user=new_user)
            user_profile.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GenerateCSRFTokenView(views.APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def get(self, request, *args, **kwargs):
        print("Generating CSRF token...")
        if not request.COOKIES.get('csrftoken'):
            response = Response(status=204)
            response = response.set_cookie('csrftoken', get_token(request))
            return response  # return the response object with the Set-Cookie header set
        # return a simple 204 response if the cookie is already set
        return Response(status=204)
