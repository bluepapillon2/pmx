'use strict';

const winston = require('../../../configs/logger.js');
const express = require('express');

const customerSearchController = require('./customer-search');
const customersController = require('./customers');
const homeController = require('./home');

let router = express.Router();

router.use('/customer-search', customerSearchController);
router.use('/customers', customersController);
router.use('/home', homeController);

module.exports = router;
