# Generated by Django 4.0.2 on 2022-06-23 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myonlinecv', '0013_project_timestamp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='image',
        ),
        migrations.RemoveField(
            model_name='project',
            name='cover_image',
        ),
        migrations.AddField(
            model_name='image',
            name='image_name',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='image_name',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
