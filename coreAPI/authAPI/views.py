from django.shortcuts import render
from rest_framework import generics, authentication, permissions, status, views
from django.http import JsonResponse
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from authAPI.serializers import UserTokenObtainPairSerializer, UserCreateSerializer, UserSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.middleware.csrf import get_token
from user_profile.models import UserProfile
from user_profile.serializers import UserProfileSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
from django.utils.decorators import method_decorator
# Generate the csrf_token and send to the front end
from django.contrib.auth import get_user_model

User = get_user_model()


# @method_decorator(ensure_csrf_cookie, name='dispatch')
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


class RegisterUserView(views.APIView):

    """A registration request handler"""

    permission_classes = [permissions.AllowAny]

    def post(self, request):
        data = request.data
        serializer = UserCreateSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validated_data)
        user = UserCreateSerializer(user)

        return Response(data=user.data, status=status.HTTP_201_CREATED)


# class RetriveUserView(views.APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def get(self, request):
#         user = request.user
#         serializer = UserSerializer(user)
#         return Response(data=serializer.data, status=status.HTTP_200_OK)


class RetriveUserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    # reteriving a user the makes the request
    def get_object(self):
        user = self.request.user
        return user

    def retrieve(self, request, *args, **kwargs):
        user_instance = self.get_object()
        serializer = self.get_serializer(user_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)
