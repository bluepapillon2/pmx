'use strict';

// Declare project modules
const logger = require('../../../../configs/logger.js')

const
    express = require('express'),
    executionsService = require('../../../services/executions');

let router = express.Router();

// Log message to console
var message = "P-Mex CORE Server defining routes for model execution micro-services";
logger.info(message);


router.get('/:id', executionsService.getExecutionWithId);
router.post('/', executionsService.postExecution);

module.exports = router;
