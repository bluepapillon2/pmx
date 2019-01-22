'use strict';

const
    express = require('express'),
    customerService = require('../../../services/customer-search');

let router = express.Router();

router.get('/', customerService.getCustomerSearch);

module.exports = router;
