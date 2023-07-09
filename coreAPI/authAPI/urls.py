from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView)
from .views import UserTokenObtainPairView, UserLogoutView, RegisterNewUser


# setting the app name

app_name = 'authAPI'

urlpatterns = [
    # path('', UserIndex.as_view(), name='index'),
    path('token/', UserTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('logout/', UserLogoutView.as_view(), name='index'),
    path('register/', RegisterNewUser.as_view(), name='register-new-user'),

]
