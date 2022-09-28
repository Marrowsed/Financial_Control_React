from rest_framework.generics import *

from .serializer import *

# Create your views here.
"""
def index(request):
    account, created = Account.objects.get_or_create(id=1)
    print(account.get_debit)
    print(account.get_savings)
    limit = account.limit - account.get_debit
    print(limit)
    ctx = {'pay': account, 'limit': limit}
    return render(request, 'index.html', ctx)
"""


class BankView(ListCreateAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerial


class BankDetail(RetrieveUpdateDestroyAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerial


class AccountView(ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerial


class AccountDetail(RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerial


class MovementView(ListCreateAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerial


class MovementDetail(RetrieveUpdateDestroyAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerial
