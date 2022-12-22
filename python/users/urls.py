from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views
# fazendo um import do rest_framework_simplejwt utilizo a view pronta de login colocando-a no path de login abaixo
# crio mais duas rotas, uma de users onde todos podem acessar sendo de criação e de listagem de todos os usuários
# e a outra rota, seria para deleção, update e listagem de usuários específicos onde o usuário precisa informar 
# o user_id e está autenticado para acessar a rota.
urlpatterns = [
    path("users/", views.UserView.as_view()),
    path("users/<int:user_id>/", views.UserDetailView.as_view()),
    path("users/login/", jwt_views.TokenObtainPairView.as_view()),
]