# Generated by Django 4.0.2 on 2022-06-09 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myonlinecv', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='codingskill',
            name='level',
            field=models.BooleanField(),
        ),
    ]
