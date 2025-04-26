from rest_framework import serializers
from .models import StudentRecord

class StudentRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentRecord
        fields = '__all__'  # 모델의 모든 필드를 사용