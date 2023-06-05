from django.urls import path
from . import views

urlpatterns = [
    path('subscribe/', views.subscribe),
    path('contact/', views.contact),
    path('submit-property/', views.submit_property),
]