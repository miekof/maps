# How to run tests
This document how to run tests for this project.

# Set up the local env
Follow the instruction described top `README.md` section [Local setup (without Docker)](https://github.com/miekof/maps#local-setup-without-docker).

# Run tests
Running Django tests described in [Running tests](https://docs.djangoproject.com/en/3.1/topics/testing/overview/#running-tests) in Django's documentation.
```buildoutcfg
cd web
python3 ./manage.py test
```
## Having issues with running tests?
### Database create permission error
Django creates a separate test database, and does not touch production database. Database user `chicommons` may not have 
a sufficient privillage to create a new database. 

1. Start psql from command line
```buildoutcfg
psql -U postgress
```
2. Alter user permission
```xml
psql (13.2 (<OS info here>))
Type "help" for help.

postgres=#  ALTER USER chicommons CREATEDB;
```
