from django.urls import path
from .views import approve

urlpatterns = [
    path('approve/', approve, name='approve'),
]
