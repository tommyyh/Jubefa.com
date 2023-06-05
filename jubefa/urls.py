from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', include('contact.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
