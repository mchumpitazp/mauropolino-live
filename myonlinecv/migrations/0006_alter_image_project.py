# Generated by Django 4.0.2 on 2022-06-18 11:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myonlinecv', '0005_rename_images_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='project',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='myonlinecv.project'),
        ),
    ]
