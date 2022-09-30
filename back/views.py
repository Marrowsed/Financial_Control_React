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
    serializer_class = AccountSerial

    def get_queryset(self):
        bank = self.kwargs['pk']
        return Account.objects.filter(bank=bank)


class AccountDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = AccountSerial

    def get_queryset(self):
        bank = self.kwargs['b_pk']
        return Account.objects.filter(bank=bank)


class MovementView(ListCreateAPIView):
    serializer_class = MovementSerial

    def get_queryset(self):
        account = self.kwargs['pk']
        return Movement.objects.filter(account=account)


class MovementDetail(RetrieveUpdateDestroyAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerial

    def get_queryset(self):
        account = self.kwargs['a_pk']
        return Movement.objects.filter(account=account)