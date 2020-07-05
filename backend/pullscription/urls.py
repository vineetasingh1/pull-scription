from rest_framework import routers
from django.urls import path, include
from .views import current_user, UserList
from pullscription import views

router = routers.DefaultRouter()

router.register('comics', views.ComicsAPI)

urlpatterns = [
    path('api/', include(router.urls)),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]
