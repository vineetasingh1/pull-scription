from rest_framework import routers
from django.urls import path, include
from pullscription import views

router = routers.DefaultRouter()

router.register('comics', views.ComicsAPI)

urlpatterns = [
    path('api/', include(router.urls))
]