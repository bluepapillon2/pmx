'use strict';

const express = require('express');

const customersController = require('./customers');
const homeApiController = require('./home');

let router = express.Router();

router.use('/home', homeApiController);
router.use('/customers', customersController);

module.exports = router;
