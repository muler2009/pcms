from django.urls import path
from .views import RegisterUserView, GetUsersProfile


app_name = 'user_profile'

urlpatterns = [
    path('fetchUserProfile/', GetUsersProfile.as_view(), name='add-user'),
    path('adduser/', RegisterUserView.as_view(), name='add-user'),

]
