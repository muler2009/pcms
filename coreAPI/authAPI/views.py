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


# class GenerateCSRFTokenView(views.APIView):
#     def get(self, request,  format=None, *args, **kwargs):
#         if not request.COOKIES.get('csrftoken'):
#             # generate a new CSRF token and set it in the COOKIES
#             csrf_token = get_token('csrftoken')
#             request.COOKIES['csrf_token'] = csrf_token
#             # return the CSRF token in the response headers
#         response = Response(status=204)
#         response['x-csrftoken'] = request.COOKIES['csrf_token']
#         return response


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


# Registering the New user
class RegisterNewUserAuthentication(generics.CreateAPIView):
    # queryset = UsersProfile.objects.all()
    # serializer_class = UserProfileSerializer
    pass


# Registering the New user
# class RegisterUserView(generics.CreateAPIView):
#     # queryset = UsersProfile.objects.all()
#     # serializer_class = UserProfileSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAdminUser]

#     def create(self, request: Request, *args, **kwargs):

#         # creating the new serializer instance with data requested
#         serializer = self.get_serializer(data=request.data)
#         # Checking if the request data is valid
#         if serializer.is_valid():
#             newUserCreated = serializer.save()  # save the new User
#             user = UserAuthentiacation.objects.get['usernmae']
#             user_profile = UserProfile(
#                 user, first_name='', lasst_name='', email='', gender='',  date_of_birth='')
#             user_profile.save()

#             if newUserCreated:
#                 # Response upon successful creation
#                 return Response(data=serializer.data, status=status.HTTP_201_CREATED)

#             # Response if there is an error
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#          # Response if there is an error
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
class GetCSRFToken(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAdminUser]

    def list(self, request, *args, **kwargs):
        csrftoken = get_token(request)
        return Response({'csrftoken': csrftoken})
