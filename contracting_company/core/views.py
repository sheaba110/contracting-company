from rest_framework import generics
from core.models import ConsultationRequest, Service, Project
from core.serializers import ConsultationRequestSerializer, ServiceSerializer, ProjectSerializer

class ConsultationRequestCreateView(generics.CreateAPIView):
    queryset = ConsultationRequest.objects.all()
    serializer_class = ConsultationRequestSerializer

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer