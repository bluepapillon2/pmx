'use strict';

//const process = require('process');
const logger = require('../../../configs/logger.js');
const http = require('http');

// -----------------------------------------------------------------------------------

function getAuriusCustomers(req, res) {

   logger.info("P-Mex Application service GET:mexapp-api/customers starting work");

   http.get('http://127.0.0.1:6142/aurius-api/customers', (resp) => {
     let data = '';
     // A chunk of data has been recieved.
     resp.on('data', (chunk) => {
       data += chunk;
       logger.info("Chunk of data found invoking GET:aurius-api/customers");
     });
     // The whole response has been received. Print out the result.
     resp.on('end', () => {
       //console.log(JSON.parse(data).explanation);
       var message = "P-Mex Application service GET:mexapp-api/customers responding to client";
       logger.info(message);
       logger.debug("Payload retuning to client: " + data);
       res.send(data);
     });

    }).on("error", (err) => {
       console.log("Error: " + err.message);
    });
}

// -----------------------------------------------------------------------------------

function getAuriusCustomerWithId(req, res) {

   logger.info(`P-Mex Application service GET:${req.originalUrl} starting work`);

   let id = req.params.id || 0,
       result = {};
   logger.debug("Parameter (a customer ID) passed to application service implementation: " + id );

   const options = {  hostname: 'www.google.com',
                      port: 80,
                      path: req.originalUrl,           //      'api/customers',
                      method: 'GET',
                      headers: {
                           'Content-Type': 'application/json',
                           'Content-Length': 0
  }
};

   http.get('http://127.0.0.1:6142/aurius-api/customers/1', (resp) => {

     let data = '';
     // A chunk of data has been recieved.
     resp.on('data', (chunk) => {
       data += chunk;
       logger.debug("Aurius core service returned some data to Application Service");
     });
     // The whole response has been received. Print out the result.
     resp.on('end', () => {
       //console.log(JSON.parse(data).explanation);
       var message = `P-Mex Application service GET:${req.originalUrl} responding to client`;
       logger.debug(message);
       logger.debug("Payload retuning to client: " + data);
       //winston.debug(res);
       res.send(data);
     });

    }).on("error", (err) => {
       logger.error("Error: " + err.message);
    });
}




module.exports = {
    getAuriusCustomers: getAuriusCustomers,
    getAuriusCustomerWithId: getAuriusCustomerWithId
};
