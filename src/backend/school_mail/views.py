from django.shortcuts import render
from django.views import generic
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.decorators import action


# Create your views here.

class AccountUserView(viewsets.GenericViewSet):

    @action(detail=False, methods=['POST'])
    def login(self, request, *args, **kwargs):
        print(request.data)
        # return render(request, 'school_mail/login.html')