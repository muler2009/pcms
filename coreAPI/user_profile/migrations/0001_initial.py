# Generated by Django 4.2.2 on 2023-07-12 14:13

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='', max_length=50, verbose_name='First Name')),
                ('last_name', models.CharField(default='', max_length=50, verbose_name='Last Name')),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=20, verbose_name='Sex')),
                ('date_of_birth', models.DateField(blank=True, default=datetime.date(2000, 1, 1), null=True)),
                ('email', models.EmailField(max_length=200)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'User Profile',
                'db_table': 'Profile',
                'ordering': ['first_name'],
            },
        ),
    ]
