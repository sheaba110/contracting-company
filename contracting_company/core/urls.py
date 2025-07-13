from django.urls import path
from core.views import ConsultationRequestCreateView, ServiceListView, ProjectListView, FacebookLoginView
from rest_framework_simplejwt.views import TokenRefreshView
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter

class FacebookLoginView(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


urlpatterns = [
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/consultation/', ConsultationRequestCreateView.as_view(), name='api-consultation'),
    path('api/services/', ServiceListView.as_view(), name='api-services'),
    path('api/projects/', ProjectListView.as_view(), name='api-projects'),
    path("api/facebook-login/", FacebookLoginView.as_view(), name="login"),
]