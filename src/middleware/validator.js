'use strict';

//Middleware to examine if req.query provides a name

function checkIfNameExists(request, response, next){
  if(!request.query.name){
    next('no name available')
  }
  next();
};

module.exports = checkIfNameExists;