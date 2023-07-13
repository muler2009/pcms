from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authAPI.urls')),
    path('user-profile/', include('user_profile.urls')),
    path('api-auth/', include('rest_framework.urls')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token-obtain_pair'),

]
