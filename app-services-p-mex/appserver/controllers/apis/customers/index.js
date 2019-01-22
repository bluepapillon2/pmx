'use strict';

const
    express = require('express'),
    customerService = require('../../../services/customers');

let router = express.Router();

router.get('/', customerService.getAuriusCustomers);
router.get('/:id', customerService.getAuriusCustomerWithId);

module.exports = router;
