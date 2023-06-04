###

Re-usable chunks of code across applications.

We will, notably, have the core of our business logic here in the form of JS classes representing services. The methods of the classes should allow for easy re-use across applications and not have to
change based on implementation details of any application.

Each service will have its own data access layer, data access object, "repository" or store. This will also be a class that will interact directly with the database(s) that the service needs to.
