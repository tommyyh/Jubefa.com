from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Subscriber
from .serializers import SubscribersSerializer
from django.core.mail import EmailMessage
from django.conf import settings
from decouple import config
from django.http import QueryDict

@api_view(['POST'])
def subscribe(request):
  email = request.data['email']

  # Check if its empty
  if not email:
    return Response({ 'status': 400 })
  
  # Check if exists
  if Subscriber.objects.filter(email=email):
    return Response({ 'status': 401 })

  # Add user to mailing list
  serializer = SubscribersSerializer(data={
    'email': email,
  })

  if serializer.is_valid():
    serializer.save()

    return Response({ 'status': 200 })
  else:
    return Response({ 'status': 400 })
  
@api_view(['POST'])
def contact(request):
  name = request.data['name']
  email_address = request.data['email']
  msg = request.data['msg']
  body = f'Name: {name}, Email: {email_address}, Message: {msg}'

  email = EmailMessage(
    'Jubefa Immobilien: Contact',
    body,
    settings.EMAIL_HOST_USER,
    [config('EMAIL')],
  )

  email.fail_silently = False

  try:
    email.send()

    return Response({ 'status': 200 })
  except Exception:
    return Response({ 'status': 400 })
  
@api_view(['POST'])
def submit_property(request):
  info = request.data
  message = f"Name: {info['name']}\nEmail: {info['email']}\nAddress: {info['address']}\nPhone: {info['tel']}\nType: {info['type']}\nOther: {info['other']}\nSize: {info['size']}\nPrice: {info['price']}\nAdditional: {info['additional']}\nReason: {info['reason']}\nTime: {info['time']}"

  email = EmailMessage(
    'Jubefa Immobilien: Submit Property',
    message,
    settings.EMAIL_HOST_USER,
    [config('EMAIL')],
  )

  # Check file size
  file = info['file']
  if file and file.size > 1024 * 1024 * 5: # 5 MB
    return Response({'status': 400 })

  # Attach file to email
  if file:
    email.attach(file.name, file.read(), file.content_type)
  email.fail_silently = False

  try:
    email.send()

    return Response({ 'status': 200 })
  except Exception:
    return Response({ 'status': 400 })