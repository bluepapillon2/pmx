'use strict';

const logger = require('../../../configs/logger.js');
const url = require('url');

// Mock database of customers - actually racing drivers
const customerdata = require('./data-temp-customers.js');
const customers = customerdata.customerlist;

function searchCustomers(req, res) {
    const q = url.parse(req.url, true).query;
    const qs = q.searchString;
    logger.verbose("Searching for customers containing the string " + qs)
    var fc = customerdata.filteredCustomers(qs);

    // Make a beautiful object to return ...

        var fcObj = { FCData : {
                        _links : {
                              self: { "href": "/cafbi-api/customers" + req.url }
                        },
                        CustomerTable : {
                             Customers :  fc
                             }
                        }
                    };
        res.json(fcObj);
}

function getCustomers(req, res) {
    res.json(customers[78]);
}

function getCustomerWithId(req, res) {
    let id = req.params.id || 0,
        result = {};

     for (let i = 0; i < customers.length; i++) {
        if (customers[i].id == id) {
            result = customers[i];
            break;
        }
     }

     res.json(result);
}

module.exports = {
    getCustomers: getCustomers,
    searchCustomers: searchCustomers,
    getCustomerWithId: getCustomerWithId
};
