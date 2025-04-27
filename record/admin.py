from django.contrib import admin

# Register your models here.
from .models import StudentRecord

@admin.register(StudentRecord)
class StudentRecordAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'subject', 'created_at')
    search_fields = ('student_name', 'subject')

from django.contrib import admin
from .models import StudentRecord
