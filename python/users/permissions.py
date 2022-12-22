from rest_framework import permissions
from .models import User
from rest_framework.views import View

# faço o import de permissions do res_framework para a criação de uma permissão personalizada
# faço o uso das permissões personalizadas do rest_framework, a em questão a has_object_permission
# que faz a permissão a nivel de objeto passado na url onde a condição será: 
# o usuário precisa está autenticado 
# se o usuário não for um superuser e só poderá acessar se o obj for ele mesmo
class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view: View, obj: User) -> bool:
        if request.user.is_authenticated:
            if request.user.is_superuser:
                return True
            if obj == request.user:
                return True
        return False