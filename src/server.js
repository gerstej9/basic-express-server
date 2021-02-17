'use strict';

//Importing dependencies
const express = require ('express');
const app = express();
const routeNotFound = require ('./error-handlers/404.js');
const internalServiceError = require ('./error-handlers/500.js');
const logger = require ('./middleware/logger.js');
const validator = require('./middleware/validator.js');

//Utilized for handling json objects in express
app.use(express.json());

//Route for person to obtain a name from req.query
//contains functions for logging http request method and path as well as req.query input validation
app.get('/person', logger, validator, (request, response, next) => {
  let responseObject = {
    name: request.query.name,
  }
  response.status(200).json(responseObject);
});

//404 error handler for route not found
app.use(routeNotFound);
app.use(internalServiceError);


//Function to start server exported to index.js
function start(port){
  app.listen(port, () => console.log('App is listening on Port::', port));
}

module.exports = {
  app: app,
  start: start,
};