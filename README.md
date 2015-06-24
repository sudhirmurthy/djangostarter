# README - DCSMS Server v0.1 #

Documentation to get DC SMS up and running on your development machines.

### What is this repository for? ###

* Quick summary
 - DCSMSServer is DigiCollect's indigenous sms server application built for use by any digicollect client (cloud/web/mobile app). The design philosophy of dcsmsserver is to abstract the sms service provider functionality it uses (solutions infini) with all it's clients.

* Version 0.1 (Beta)

### How do I get set up? ###

* Eclipse Luna
* Python 2.7
* Django version 1.5.5 (Strict)
* Install Pydev - From eclipse > software updates> (http://pydev.org/updates)
* Python-MySql community server edition
* Redis server
* Py-Redis
* Clone the project into your local machine and import the project from eclipse. simple!
* Create your mysql db if it dosen't exists - name it 'dc_sms-server' *MANDATORY
* Run command : 
mysql dc_sms_server -u<username> -p<username> <dcsmsserver/dcsmsserver/svc/static/src/res/db/dc_sms_server.sql 
to create / update the database.
* Finally, Run as py-dev django project

### How to run tests
* Python unit test modules

### Deployment instructions
* Nginx web server
* Nginx script
* creation of dns - dcsmsserver.digicollect.net/
*
### Contribution guidelines ###

* Writing tests
- Simple Python unit tests

* Code review
- Sudhir Murthy (sudhir@digicollectgis.com)

* Other guidelines
- Sudhir Murthy

### Who do I talk to? ###

* Sudhir Murthy
* Renu Hiremath