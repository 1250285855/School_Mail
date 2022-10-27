from django.contrib import auth
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

TheSuperCode = '123456'


# Create your views here.

class AccountUserView(viewsets.GenericViewSet):

    @action(detail=False, methods=['POST'])
    def register(self, request, *args, **kwargs):

        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if User.objects.filter(username=username).exists():
            resp = {
                'status': False,
                'data': '用户名已被注册'
            }
        elif User.objects.filter(email=email).exists():
            resp = {
                'status': False,
                'data': '邮箱已被注册'
            }
        else:
            user = User.objects.create_user(username=username, password=password)
            resp = {
                'status': True,
                'data': '注册成功'
            }
        return Response(resp)

    @action(detail=False, methods=['POST'])
    def login(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = auth.authenticate(username=username, password=password)
        if user:
            auth.login(request, user)
            resp = {
                'status': True,
                'data': '登录成功'
            }
        else:
            resp = {
                'status': False,
                'data': '账号或密码错误'
            }
        return Response(resp)

    @action(detail=False, methods=['POST'])
    def delete_account(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        superCode = request.data.get('superCode')
        user = auth.authenticate(username=username, password=password)
        if user:
            if superCode == TheSuperCode:
                user.delete()
                resp = {
                    'status': True,
                    'data': '账号删除成功'
                }
            else:
                resp = {
                    'status': False,
                    'data': '超级密码错误'
                }
        else:
            resp = {
                'status': False,
                'data': '账号或密码错误'
            }

        return Response(resp)
