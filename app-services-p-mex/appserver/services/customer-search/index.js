'use strict';

//const process = require('process');
const url = require('url');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const logger = require('../../../configs/logger.js');

// -----------------------------------------------------------------------------------

function getCustomerSearch(req, res) {
// searches multiple systems for customers containing the search string, sorts the full
// and returns it to the caller.

  logger.info("Customer Search: GET:mexapp-api/customers/search starting work");

  const q = url.parse(req.url, true).query;
  const qs = q.searchString;

   const promiseA = new Promise(function(resolve, reject) {
       logger.verbose("Customer Search: invoke web service to find Aurius Customers containing '" + qs + "'");
       resolve(searchAuriusCustomers(qs));
   });

   const promiseB = new Promise(function(resolve, reject) {
       logger.verbose("Customer Search: invoke web service to find CAF BI Customers containing '" + qs + "'");
       resolve (searchCafbiCustomers(qs));
   });

   Promise.all([promiseA, promiseB]).then(function(values) {
       logger.verbose("Customer Search: Sort Aurius and CAF BI Customers containing '" + qs + "'");
       res.json(values);
   });

}


function searchAuriusCustomers(qs,res) {
  return new Promise((resolve, reject) => {
    logger.verbose("Customer Search: Calling core service to retrieve Aurius customers");
    const url = 'http://127.0.0.1:6142/aurius-api/customers/search?searchString=' + qs;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

function searchCafbiCustomers(qs,res) {
  return new Promise((resolve, reject) => {
    logger.verbose("Customer Search: Calling core service to retrieve CAF BI customers");
    const url = 'http://127.0.0.1:6143/cafbi-api/customers/search?searchString=' + qs;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}



// -----------------------------------------------------------------------------------

module.exports = {
    getCustomerSearch: getCustomerSearch
};
