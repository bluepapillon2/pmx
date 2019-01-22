'use strict';

const
    express = require('express'),
    homeController = require('../../../controllers/apis/home');

let router = express.Router();

router.use('/', homeController);

module.exports = router;
