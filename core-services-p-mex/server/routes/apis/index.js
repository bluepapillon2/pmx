'use strict';

const express = require('express');

const homeApiController = require('./home');
const modelsApiController = require('./models');
const executionsApiController = require('./executions');

let router = express.Router();

router.use('/home', homeApiController);
router.use('/p-mex', homeApiController);
router.use('/models', modelsApiController);
router.use('/executions', executionsApiController);

module.exports = router;
