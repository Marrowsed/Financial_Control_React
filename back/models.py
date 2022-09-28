from django.db import models


# Create your models here.

class Bank(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

    @property
    def imageURL(self):
        """
        If there's no image, show nothing
        """
        try:
            url = self.image.url
        except:
            url = ''
        return url


class Account(models.Model):
    name = models.CharField(max_length=200)
    bank = models.ForeignKey(Bank, on_delete=models.CASCADE)
    limit = models.DecimalField(decimal_places=2, max_digits=20)

    def __str__(self):
        return self.name

    @property
    def get_credit(self):
        """
        Sum all the payments and return limits
        """
        credit = self.movement_set.filter(p_choice='C')
        total = sum([item.value for item in credit])
        return total

    @property
    def get_savings(self):
        """
        Sum all the savings and return
        """
        savings = self.movement_set.filter(p_choice='S')
        total = sum([item.value for item in savings])
        return total

    @property
    def get_debit(self):
        """
        Return total value of the account
        """
        debit = self.movement_set.filter(p_choice='D')
        total = sum([item.value for item in debit])
        return total


class Movement(models.Model):
    p_choice = (
        ('C', 'Credit'),
        ('D', 'Debit'),
        ('S', 'Savings')
    )
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    p_choice = models.CharField(max_length=1, choices=p_choice)
    p_months = models.IntegerField(default=0, blank=True)
    description = models.CharField(max_length=200)
    value = models.DecimalField(decimal_places=2, max_digits=20)

    def __str__(self):
        return f"{self.description} - ${self.value}"


