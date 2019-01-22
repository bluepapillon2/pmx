'use strict';

const
    express = require('express'),
    modelsController = require('../../../controllers/apis/models');

let router = express.Router();

router.use('/', modelsController);

module.exports = router;
