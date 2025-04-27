from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentRecordSerializer

from django.shortcuts import render

# Create your views here.
# (1) 생기부 저장용 View
class StudentRecordCreateView(APIView):
    def post(self, request):
        serializer = StudentRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# (2) 생기부 검토용 View (← 추가하는 부분!)
class StudentRecordValidateView(APIView):
    def post(self, request):
        full_text = request.data.get('full_text', '')

        if not full_text:
            return Response({"error": "full_text is required."}, status=status.HTTP_400_BAD_REQUEST)

        return Response({
            "message": "검토 성공",
            "received_text": full_text
        }, status=status.HTTP_200_OK)