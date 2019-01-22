# Model Execution Server - CORE Services

This is a Node Express environment written to offer a set of CORE services for the P-Mex Model Execution Server.  The server consists of two things:

1) Model Execution Repository to store model metadata, model workflow and model execution results.

2) An interface to R functions which execute any predictive model implemented in R which meets the interface criteria.


## Running
To start and run the project/server, simply run the following command in your root directory:

```
npm start
```


## Sample endpoints

### Views
 - /home - Render the home page, a static page indicating the status of the server.

### API
 - GET: /api		     Get possible end-points
 - GET: /api/executions/ ...
 - GET: /api/executions/:id  Get an execution of designated ID
 - GET: /api/models
 - GET: /api/models/:id
 - GET: /api/models/:id/versions
 - GET: /api/models/:id/variables
 - POST:/api/models          Posts a new model instance to the DB