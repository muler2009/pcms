from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserAccountManager
from datetime import date


# Create your models here.
class Users(AbstractBaseUser, PermissionsMixin):

    GENDER = [
        ("M", "Male"),
        ("F", "Female")
    ]

    first_name = models.CharField(
        max_length=50, verbose_name="First Name", blank=True)
    last_name = models.CharField(
        max_length=50, verbose_name="Last Name", blank=True)
    date_of_birth = models.DateField(default=date(2000, 1, 1))
    gender = models.CharField(max_length=10, choices=GENDER)
    email = models.EmailField(
        verbose_name="Email address", max_length=50, unique=True, blank=False)
    username = models.CharField(
        max_length=100, verbose_name="Username", unique=True, blank=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    class Meta:
        ordering = ["first_name"]
        verbose_name = "Users"
        db_table = "Users"

    def __str__(self):
        return f"{self.first_name}"
