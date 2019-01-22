'use strict';

const
    express = require('express'),
    homeService = require('../../../services/home');

let router = express.Router();

router.get('/', homeService.getHome);

module.exports = router;
