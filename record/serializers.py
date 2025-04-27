#Django REST Framework(줄여서 DRF)는 Serializer를 통해
#모델과 데이터(JSON)를 변환하고 저장해.
#쉽게 말하면: "데이터를 받을 때, 보내줄 때 정리하는 포맷" 같은 거야.

from rest_framework import serializers
from .models import StudentRecord

class StudentRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentRecord
        fields = '__all__'  # 모델의 모든 필드를 사용