from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserAccountManager
from datetime import date


class UserAuthentiacation(AbstractBaseUser, PermissionsMixin):
    class ROLE(models.TextChoices):
        ADMINISTRATOR = "ADMINISTRATOR", 'Administrator'
        PROJECT_MANAGER = 'MANAGER', 'Project manager'
        STAFF = "STAFF", 'Staff'

    default_role = ROLE.STAFF

    # defining the custom fileds for User Authenticaion models
    email = models.EmailField(
        verbose_name="Email address", max_length=50, unique=True, blank=False)
    username = models.CharField(
        max_length=200, unique=True, null=False, blank=False)
    user_role = models.CharField(max_length=50, choices=ROLE.choices)
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

# User profile information model


class UsersProfile(models.Model):

    class GENDER(models.TextChoices):
        MALE = "MALE", 'male'
        FEMALE = 'FEMALE', 'female'

    first_name = models.CharField(
        max_length=50, verbose_name="First Name", blank=True)
    last_name = models.CharField(
        max_length=50, verbose_name="Last Name", blank=True)
    date_of_birth = models.DateField(default=date(2000, 1, 1))
    gender = models.CharField(max_length=10, choices=GENDER.choices)
    email = models.EmailField(
        verbose_name="Email address", max_length=50, unique=True, blank=False)
    user = models.OneToOneField(
        'UserAuthentiacation', on_delete=models.CASCADE, related_name='info')

    class Meta:
        ordering = ["first_name"]
        verbose_name = "Users Profile"
        db_table = "UserProfile"

    def __str__(self):
        return f"{self.first_name}"
