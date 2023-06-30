from django.contrib import admin
from .models import Users
from django.contrib.auth.admin import UserAdmin


# Register your models here.

class UserAdminConfig(UserAdmin):
    ordering = ('first_name',)
    search_fields = ('email', 'username', 'first_name')
    list_display = ('first_name', 'last_name', 'email',
                    'username', 'date_of_birth', 'is_staff', 'is_superuser')

    fieldsets = (
        (None, {'fields': ('email', 'username', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active',)}),
    )

    # When adding Users It would appear as
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )


admin.site.register(Users, UserAdminConfig)
