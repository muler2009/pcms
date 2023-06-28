from django.urls import path
from .views import UserIndex

urlpatterns = [
    path('', UserIndex.as_view(), name='index')
]
