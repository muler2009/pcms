from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, password, user_role, **extra_fields):

        # checking the email is provided or not
        if not email:
            raise ValueError(_("Email Must be Provided"))

        # cahnging tp appropriate text format
        email = self.normalize_email(email)
        user = self.model(email=email, username=username,
                          user_role=user_role, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password, user_role, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Super User must be Assigned to is_staff = True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(
                'Super User must be Assigned to is_superuser = True')
        return self.create_user(email, username, password, user_role, **extra_fields)
