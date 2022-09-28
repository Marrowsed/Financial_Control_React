from rest_framework import serializers

from .models import *


class BankSerial(serializers.ModelSerializer):
    class Meta:
        model = Bank
        fields = "__all__"


class AccountSerial(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"


class MovementSerial(serializers.ModelSerializer):
    """
    Type = serializers.CharField(source='p_choice')
    Months = serializers.IntegerField(source='p_months')
    Description = serializers.CharField(source='description')
    Value = serializers.DecimalField(source='value', decimal_places=2, max_digits=20)
    """
    class Meta:
        model = Movement
        #fields = ('account', 'Type', 'Months', 'Description', 'Value')
        fields = "__all__"
