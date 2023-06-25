from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_account(self, usernmae, password, **extra_fields):
        pass

    def create_admin_user(self, email, password, **extra_fields):
        pass
