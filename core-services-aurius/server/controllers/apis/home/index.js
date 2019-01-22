'use strict';

// Declare project modules
const logger = require('../../../../configs/logger.js')

const
    express = require('express'),
    homeService = require('../../../services/home');

let router = express.Router();

// Log message to console
var message = "Aurius CORE Server defining routes for home micro-services";
logger.info(message);

router.get('/', homeService.getHome);

logger.debug("Micro-service 1: " + "GET: Home (will return home (navigation) payload)");

module.exports = router;
