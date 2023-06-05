from django.db import models

class Subscriber(models.Model):
  email = models.EmailField(max_length=255, null=False)

  def __str__(self):
    return self.email