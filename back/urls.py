from django.urls import path

from .views import *
urlpatterns = [
    path('banks/', BankView.as_view(), name='bank-view'),
    path('banks/<str:pk>/', BankDetail.as_view(), name='bank-detail'),
    path('<str:pk>/accounts/', AccountView.as_view(), name='account-view'),
    path('<str:b_pk>/accounts/<str:pk>/', AccountDetail.as_view(), name='account-detail'),
    path('<str:pk>/movements/', MovementView.as_view(), name='movement-view'),
    path('<str:pk>/movements/<str:month>/<str:year>', MovementMonthYearView.as_view(), name='movement-month-year-view'),
]