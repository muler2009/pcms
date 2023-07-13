from django.contrib import admin
from .models import UserAuthentiacation
from django.contrib.auth.admin import UserAdmin


# Register your models here.

# class UserAuthenticationAdminConfig(UserAdmin):
#     list_display = ('username', 'user_role',
#                     'is_staff', 'is_superuser')
#     exclude = ('first_name', 'last_name', 'date_joined')
#     # add_fieldsets = (
#     #     (None, {
#     #         'classes': ('wide',),
#     #         'fields': ('email', 'username', 'user_role', 'password1', 'password2', 'is_staff', 'is_active')
#     #     }),
#     # )


admin.site.register(UserAuthentiacation)


# @admin.register(UsersProfile)
# class UserProfileAdminConfig(admin.ModelAdmin):
#     list_display = ('first_name', 'last_name',
#                     'date_of_birth', 'gender')

#     def save_model(self, request, obj, form, change):
#         if request.user.is_superuser:
#             obj.is_staff = True
#             obj.save()
