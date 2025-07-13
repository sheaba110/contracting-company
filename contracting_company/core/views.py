from rest_framework import generics
from core.models import ConsultationRequest, Service, Project
from core.serializers import ConsultationRequestSerializer, ServiceSerializer, ProjectSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
import requests

class FacebookLoginView(APIView):
    def post(self, request):
        access_token = request.data.get('access_token')
        email = request.data.get('email')
        name = request.data.get('name')
        facebook_id = request.data.get('facebook_id')

        if not access_token or not email or not facebook_id:
            return Response({'error': 'Username or Password wrong!'}, status=status.HTTP_400_BAD_REQUEST)

        fb_response = requests.get(
             f'https://graph.facebook.com/me?access_token={access_token}&fields=id,email,name'
        ).json()
        
        if fb_response.get('id') != facebook_id:
            return Response({'error': 'Invalid Facebook token'}, status=status.HTTP_400_BAD_REQUEST)

        user, created = User.objects.get_or_create(
            username=email,
            defaults={'email': email, 'first_name': name}
        )

        refresh = RefreshToken.for_user(user)

        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': {
                'name': user.first_name,
                'email': user.email
            }
        }, status=status.HTTP_200_OK)

class ConsultationRequestCreateView(generics.CreateAPIView):
    queryset = ConsultationRequest.objects.all()
    serializer_class = ConsultationRequestSerializer

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer