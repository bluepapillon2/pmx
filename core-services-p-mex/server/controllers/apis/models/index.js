'use strict';

// Declare project modules
const logger = require('../../../../configs/logger.js')

const
    express = require('express'),
    modelService = require('../../../services/models');

let router = express.Router();

// Log message to console
var message = "P-Mex CORE Server defining routes for models micro-services";
logger.info(message);

router.get('/', modelService.getModels);
router.get('/:id', modelService.getModelWithId);

module.exports = router;
