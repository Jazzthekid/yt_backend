from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments_for_video(request, video_id):
    try:
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Comment.DoesNotExist:
        return Response({"error": "Video ID not found"}, status=status.HTTP_404_NOT_FOUND)
    

