'use strict';

const winston = require('../../../../configs/logger.js');

const
    express = require('express'),
    homeController = require('../../../controllers/apis/home');

let router = express.Router();

winston.info('P-Mex APPLICATION Server configuring home route');

router.use('/', homeController);

module.exports = router;
