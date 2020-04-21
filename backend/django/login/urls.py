from django.urls import path, include
from .views import TestAPI, RegistrationAPI, LoginAPI, UserAPI, ProfileUpdateAPI
#from rest_framework.routers import DefaultRouter
from login import views


#router = DefaultRouter()
#router.register('register', views.RegistrationAPI)

urlpatterns = [
    #path('login/', include(router.urls)),
    path('test/', TestAPI),
    path("auth/register/", RegistrationAPI.as_view()),
    path("auth/login/", LoginAPI.as_view()),
    path("auth/user/", UserAPI.as_view()),
    path("auth/profile/<int:user_pk>/update/", ProfileUpdateAPI.as_view()),

]
