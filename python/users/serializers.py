from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
import ipdb
# para a serialização dos dados eu utilizo o serializer do rest_framework utilizando o modelSerializer
# no campo de configurações eu coloco a model User e os filds que quero utilizar, o extra_kwargs passo algumas configurações personalizadas 

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    class Meta:
        model = User
        fields = ['id','username','email','password','is_superuser','created_at','updated_at','is_active']
        extra_kwargs = { 
            'password':{'write_only': True}, 
            'created_at':{'read_only': True},
            'updated_at':{'read_only': True},
            'is_active':{'read_only': True}
            }
    # no create do serializer fiz uma lógica pra que:
    # caso o usuário não tenha especificado que é um superuser ele venha como padrão False
    def create(self, validated_data:dict) -> User:
        validated_data.setdefault('is_superuser',False)
        if validated_data['is_superuser']:
            return User.objects.create_superuser(**validated_data)
        return User.objects.create_user(**validated_data)
    def update(self, instance:User, validated_data: dict) -> User:
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()
        return instance