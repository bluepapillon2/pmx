'use strict';

const logger = require('../../../../configs/logger.js');

const
    express = require('express'),
    customersController = require('../../../controllers/apis/customers');

let router = express.Router();

logger.info('CAF BI CORE Server customer routes initialising');

router.use('/', customersController);

module.exports = router;
