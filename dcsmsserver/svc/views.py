from django.shortcuts import render_to_response, render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import  HttpResponse
from django.contrib.auth.decorators import login_required
from django.template import RequestContext
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.clickjacking import xframe_options_exempt
from django import http
import datetime, json, os
from django.db.models import Q
import zipfile

def index(request):
    if request.method=="GET":
        return render_to_response('index.html',
                                  context_instance=RequestContext(request))        
