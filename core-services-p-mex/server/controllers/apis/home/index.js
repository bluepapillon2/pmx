'use strict';

// Declare project modules
const logger = require('../../../../configs/logger.js')

const
    express = require('express'),
    homeService = require('../../../services/home');

let router = express.Router();

// Log message to console
var message = "P-Mex CORE Server defining routes for home micro-services";
logger.info(message);

router.get('/', homeService.getHome);

module.exports = router;
