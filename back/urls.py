from django.urls import path

from .views import *
urlpatterns = [
    path('banks/', BankView.as_view(), name='bank-view'),
    path('banks/<str:pk>/', BankDetail.as_view(), name='bank-detail'),
    path('accounts/', AccountView.as_view(), name='account-view'),
    path('accounts/<str:pk>', AccountDetail.as_view(), name='account-detail'),
    path('movements/', MovementView.as_view(), name='movement-view'),
    path('movements/<str:pk>', MovementDetail.as_view(), name='movement-detail'),
]