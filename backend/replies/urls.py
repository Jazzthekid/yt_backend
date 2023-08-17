from django.urls import path
from . import views

urlpatterns = [
    path('create_reply/', views.create_reply),

]