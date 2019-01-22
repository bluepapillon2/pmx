'use strict';

const logger = require('./configs/logger.js')

const
    server = require('./server')(),
    config = require('./configs');

// Log message to console
var message = "P-Mex CORE Server initiated";
logger.info(message);

server.create(config);
server.start();
