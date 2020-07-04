from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import filters
from .serializers import *
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from .forms import RegisterForm

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