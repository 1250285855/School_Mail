from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import AccountUserView

router = DefaultRouter()
router.register(r'', AccountUserView, 'accounts_view')

urlpatterns = [
    path("", include(router.urls))
]