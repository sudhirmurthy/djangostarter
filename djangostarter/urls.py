# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView
from django.contrib import admin

admin.autodiscover()
urlpatterns = patterns('',
(r'^djangostarter/', include('djangostarter.svc.urls')),
(r'^admin/',include(admin.site.urls)),
(r'^$/svc', RedirectView.as_view(url='/index')),
(r'^$/djangostarter', RedirectView.as_view(url='/svc/index')),
(r'^$', RedirectView.as_view(url='djangostarter/svc/index')) # Just for ease of use.
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
