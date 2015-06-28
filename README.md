# README - djangostarter v0.1 #

A simple django app starter template for app/services which includes
- fully responsive UI (tested on chrome / safari / firefox / iphone 4,5,6, ipads and android 4+ devices)
- django auth integration
- bootstrapv3.2.0
- bootbox
- chartjs
- touch-punch
- jqueryv2.1.1 and jquery-uiv1.10.4 
- django orm(obvious) - db scripts for postgres,mysql and mongodb

* Version 0.1 (Beta)

### How do I get set up? ###

* Eclipse Luna
* python v2.7 or v3+
* django version 1.5.5 and above
* install pydev - From eclipse > software updates> (http://pydev.org/updates)
* python-pySql community server edition, postgres or mongodb + pymongo driver
* clone the project into your local machine and import the project from eclipse. simple!
* create your mysql db if it dosen't exists - name it 'dc_sms-server' *MANDATORY
* for mysql - navigate to djangostarter/svc/static/src/res/db and run mysql django_starter -uroot -p < django_starter.sql
* for pg    - navigate to djangostarter/svc/static/src/res/db and run pg_restore

### How to run tests
*  works as-is and no tests included.
*  run inspectdb/syncdb commands to create your backend schema.

### Deployment instructions

* Nginx Web Server
* Nginx script
* Gunicorn
* Supervisor
* A CDN for static content

### Contribution guidelines ###
All contributions in favour of creating a robust django server set-up please.

* Open for proposal in adding a cache/datastore - redis,rabbitmq
* distributed tasks - celery
* Replication / Merge-replication scripts for postgres/mysql/mongodb
* Sharding for mongodb
* puppet scripts for deployment(nginx + gunicorn + supervisor)

* Writing tests
- Simple python unit tests

* Code review
- Sudhir Murthy (sudhir@buildmasters.co.in)

* Other guidelines
- Sudhir Murthy

### Who do I talk to? ###

* Sudhir Murthy
