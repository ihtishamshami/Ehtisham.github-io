from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio_view, name='portfolio'),
    path('download-resume/', views.download_resume, name='download_resume'),
]
