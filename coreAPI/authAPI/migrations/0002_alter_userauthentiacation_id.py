# Generated by Django 4.2.2 on 2023-07-11 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authAPI', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userauthentiacation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
