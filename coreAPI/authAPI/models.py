from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserAccountManager
from datetime import date
from django.conf import settings


class UserAuthentiacation(AbstractBaseUser, PermissionsMixin):
    class ROLE(models.TextChoices):
        ADMINISTRATOR = "ADMINISTRATOR", 'Administrator'
        PROJECT_MANAGER = 'MANAGER', 'Project manager'
        STAFF = "STAFF", 'Staff'

    default_role = ROLE.STAFF

    # defining the custom fileds for User Authenticaion models
    # id = models.AutoField(primary_key=True)

    email = models.EmailField(verbose_name="Email address", max_length=50,
                              unique=True, blank=True)
    username = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    user_role = models.CharField(max_length=50, choices=ROLE.choices)
    # used to control the access and permission on
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    # Default manager for the User Authentication
    objects = UserAccountManager()

    # Required field during authenticationn

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'user_role']

    class Meta:
        ordering = ["username"]
        verbose_name = "User Authentication"
        db_table = "User_Auth"

    def __str__(self):
        return f'{self.username}'
