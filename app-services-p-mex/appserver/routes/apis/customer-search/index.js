'use strict';

const winston = require('../../../../configs/logger.js');

const
    express = require('express'),
    customerSearchController = require('../../../controllers/apis/customer-search');

let router = express.Router();

winston.info('P-Mex APPLICATION Server configuring customer search routes');

router.use('/', customerSearchController);

module.exports = router;
