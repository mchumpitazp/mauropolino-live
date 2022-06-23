from django.urls import path
from . import views

from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),

    path("project_images/<int:project_id>", views.project_images, name="project_images"),
    path("project_languages/<int:project_id>", views.project_languages, name="project_languages")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
