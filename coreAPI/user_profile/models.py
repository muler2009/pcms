from django.db import models
# Create your models here.
from authAPI.models import UserAuthentiacation
from datetime import date


class UserProfile(models.Model):

    class GENDER(models.TextChoices):
        Male = "Male", 'Male'
        Female = 'Female', 'Female'

    # user = models.OneToOneField(
    #     UserAuthentiacation, on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(
        max_length=50, verbose_name='First Name', default='')
    last_name = models.CharField(
        max_length=50, verbose_name='Last Name', default='')
    gender = models.CharField(
        max_length=20, verbose_name='Sex', choices=GENDER.choices)
    date_of_birth = models.DateField(
        default=date(2000, 1, 1), null=True, blank=True)
    email = models.EmailField(max_length=200)

    class Meta:
        ordering = ['first_name']
        verbose_name = 'User Profile'
        db_table = 'Profile'

    def __str__(self):
        return f"{self.first_name}   {self.last_name}"
