from django.contrib import admin
from django.urls import path, include

# جديد: استيراد إعدادات الميديا
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('core.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),  # تسجيل الدخول والخروج وتغيير الباسورد
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),  # تسجيل مستخدم جديد
    path('api/auth/social/', include('allauth.socialaccount.urls')),  # Social OAuth
]

# ده اللي بيخلي الصور تشتغل في الـ development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
