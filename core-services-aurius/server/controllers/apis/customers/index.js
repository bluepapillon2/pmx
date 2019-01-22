'use strict';

const logger = require('../../../../configs/logger.js');
const express = require('express');
const customerService = require('../../../services/customers');

let router = express.Router();

var message = "Aurius CORE Server defining routes for customer micro-services";
logger.info(message);

router.get('/', customerService.getCustomers);
router.get('/search', customerService.searchCustomers);
router.get('/:id', customerService.getCustomerWithId);

logger.debug("Micro-service 1: " + "GET: Customers (will return first N customers)");
logger.debug("Micro-service 2: " + "GET: Customer Search ?qs (will customers containing designated string)");
logger.debug("Micro-service 3: " + "GET: Customer with ID (will return customer with designated ID)");

module.exports = router;
