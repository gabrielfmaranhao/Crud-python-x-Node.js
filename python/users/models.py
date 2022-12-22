from django.contrib.auth.models import AbstractUser
from django.db import models
# faço a importação do AbstractUser, para o uso dos campos já prontos feitos pelo django 
# e omito alguns deles como last_login, first_name, last_name, date_joined e crio alguns como o created_at e o updated_at
class User(AbstractUser):
    last_login = None
    first_name = None
    last_name = None
    date_joined = None
    created_at = models.DateTimeField(auto_now=True)
    # importo o models e uso o DateTimeField e colo o parâmetro auto_now =  True 
    # para quando um usuário for criado ele colocar a data e a hora da criação.
    updated_at = models.DateTimeField(auto_now_add=True)
    # importo o models e uso o DateTimeField e colo o parâmetro auto_now_add =  True 
    # para quando um usuário for modificado ele colocar a data e a hora da modificação.



