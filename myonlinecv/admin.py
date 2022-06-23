from django.contrib import admin

from .models import Project, Image, ProgrammingLanguage, CodingSkill

# Register your models here.



class ProgrammingLanguageAdmin(admin.ModelAdmin):
    list_display = ["project", "language"]


admin.site.register(Project)
admin.site.register(Image)
admin.site.register(ProgrammingLanguage, ProgrammingLanguageAdmin)
admin.site.register(CodingSkill)
