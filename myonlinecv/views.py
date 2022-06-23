from multiprocessing.sharedctypes import Value
from django.forms import CharField
from django.http import JsonResponse
from django.shortcuts import render
from requests import request

from .models import Project, Image, CodingSkill


# Create your views here.

def index(request):
    return render(request, "myonlinecv/index.html", {
        'projects': Project.objects.all(),
        'coding_skills' : CodingSkill.objects.all()
    })

def project_images(request, project_id):
    if request.method == "GET":
        project = Project.objects.get(pk=project_id)
        images =  project.images
        images = images.order_by("timestamp").all()
        return JsonResponse([image.serialize() for image in images], safe=False)

def project_languages(request, project_id):
    if request.method == "GET":
        project = Project.objects.get(pk=project_id)
        languages = project.programming_languages
        languages = languages.order_by("timestamp").all()
        return JsonResponse([language.serialize() for language in languages], safe=False)