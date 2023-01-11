from .models import User
from rest_framework_simplejwt.authentication import JWTAuthentication
from .permissions import IsAccountOwner
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .serializers import UserSerializer
from rest_framework.views import Response, APIView
import ipdb

class UserView(ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserDetailView(RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAccountOwner]
    queryset = User.objects.all()
    lookup_url_kwarg = "user_id"
    serializer_class = UserSerializer
    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

class UserDetailRetrive(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAccountOwner]
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
