from django.contrib import admin
from .models import UserAuthentiacation
from django.contrib.auth.admin import UserAdmin


# Register your models here.

class UserAuthenticationAdminConfig(UserAdmin):
    # ordering = ('first_name',)
    # search_fields = ('email', 'username', 'user_role')
    list_display = ('email', 'username', 'user_role',
                    'is_staff', 'is_superuser')

    # fieldsets = (
    #     (None, {'fields': ('email', 'username', 'user_role',)}),
    #     ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    # )

    # When adding Users It would appear as
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'user_role', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )


admin.site.register(UserAuthentiacation, UserAuthenticationAdminConfig)
