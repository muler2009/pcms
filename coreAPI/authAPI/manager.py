from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _


class UserAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, username, password=None, **extra_fields):

        # checking the email is provided or not
        if not email:
            raise ValueError("Email Must be Provided")

        # changing to appropriate text format
        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=email,
            username=username,
            **extra_fields
        )

        user.set_password(password)  # hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Super User must be Assigned to is_staff = True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(
                'Super User must be Assigned to is_superuser = True')

        return self.create_user(
            first_name,
            last_name,
            email,
            username,
            password,
            **extra_fields
        )
