from django.urls import path
from .views import UserIndex, UserTokenObtainPairView, UserLogoutView


# setting the app name

app_name = 'authAPI'

urlpatterns = [
    path('', UserIndex.as_view(), name='index'),
    path('token/', UserTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('logout/', UserLogoutView.as_view(), name='index'),




]
