from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login
from django.contrib.auth.models import User
import django.contrib.auth

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('dcsmsserver.svc.views',
     url(r'^$', 'index', name='index'),
     url(r'index','index', name='index')
)
