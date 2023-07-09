from django.contrib import admin
from .models import UserAuthentiacation, UsersProfile
from django.contrib.auth.admin import UserAdmin


# Register your models here.

class UserAuthenticationAdminConfig(UserAdmin):
    list_display = ('email', 'username', 'user_role',
                    'is_staff', 'is_superuser')
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'user_role', 'password1', 'password2', 'is_staff', 'is_active')
        }),
    )


admin.site.register(UserAuthentiacation, UserAuthenticationAdminConfig)


@admin.register(UsersProfile)
class UserProfileAdminConfig(admin.ModelAdmin):
    list_display = ('first_name', 'last_name',
                    'date_of_birth', 'gender', 'email')
