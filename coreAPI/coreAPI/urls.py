from django.contrib import admin
from django.urls import path, include

from authAPI.views import RegisterNewUser


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authAPI.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token-obtain_pair'),

]
