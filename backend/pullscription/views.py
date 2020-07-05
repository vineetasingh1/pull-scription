from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import filters
from .serializers import *
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ComicsAPI(viewsets.ModelViewSet):
    serializer_class = ComicsSerializer
    queryset = Comics.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['artist','title', 'writer']

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `writer` query parameter in the URL.
        """
        queryset = Comics.objects.all()
        main_desc = self.request.query_params.get('main_desc', None)
        if main_desc is not None:
            queryset = queryset.filter(main_desc = main_desc)
        return queryset
    def register(response):
        if response.method == "POST":
	        form = RegisterForm(response.POST)
	        if form.is_valid():
	            form.save()

	        return redirect("/browse")
        else:
	        form = RegisterForm()
