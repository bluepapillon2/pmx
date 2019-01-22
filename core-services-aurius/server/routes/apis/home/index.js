'use strict';

const logger = require('../../../../configs/logger.js');
const express = require('express');
const homeController = require('../../../controllers/apis/home');

let router = express.Router();

logger.info('Aurius CORE Server home route initialising');

router.use('/', homeController);

module.exports = router;
