'use strict';

const logger = require('./configs/logger.js');
const fs = require('fs');
const
    appserver = require('./appserver')(),
    config = require('./configs');

    logger.info('P-Mex Application Server starting now...');

appserver.create(config);
appserver.start();
