from django.urls import path
from core.views import ConsultationRequestCreateView, ServiceListView, ProjectListView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,)

urlpatterns = [
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/consultation/', ConsultationRequestCreateView.as_view(), name='api-consultation'),
    path('api/services/', ServiceListView.as_view(), name='api-services'),
    path('api/projects/', ProjectListView.as_view(), name='api-projects')
]