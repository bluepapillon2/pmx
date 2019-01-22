'use strict';

const winston = require('../../../../configs/logger.js');

const
    express = require('express'),
    customersController = require('../../../controllers/apis/customers');

let router = express.Router();

winston.info('P-Mex APPLICATION Server configuring customer routes');

router.use('/', customersController);

module.exports = router;
