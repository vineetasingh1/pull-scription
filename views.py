from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *

class ComicsAPI(viewsets.ModelViewSet):
    serializer_class = ComicsSerializer
    queryset = Comics.objects.all()[:5]

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
