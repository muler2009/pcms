from django.urls import path
from .views import UserIndex

# setting the app name

app_name = 'authAPI'

urlpatterns = [
    path('', UserIndex.as_view(), name='index')
]
