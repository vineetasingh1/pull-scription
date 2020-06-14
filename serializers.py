from rest_framework import serializers
from pullscription.models import Comics

class ComicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comics
        fields = "__all__"