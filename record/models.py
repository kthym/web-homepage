from django.db import models

# Create your models here.
from django.db import models

class StudentRecord(models.Model):
    student_id = models.CharField(max_length=20)
    student_name = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)
    
    achievement_level = models.TextField()     # 성취수준
    performance_process = models.TextField()   # 수행 과정 및 결과
    competency = models.TextField()            # 역량
    teacher_comment = models.TextField()       # 교사 총평
    full_text = models.TextField()             # 전체 통합 문장 (선택)
    
    created_at = models.DateTimeField(auto_now_add=True)  # 생성일
    updated_at = models.DateTimeField(auto_now=True)      # 수정일

    def __str__(self):
        return f'{self.student_name} - {self.subject}'
