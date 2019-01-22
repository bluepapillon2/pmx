'use strict';

const
    express = require('express'),
    executionsController = require('../../../controllers/apis/executions');

let router = express.Router();

router.use('/', executionsController);

module.exports = router;
