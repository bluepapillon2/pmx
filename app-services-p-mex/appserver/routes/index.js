'use strict';

const logger = require('../../configs/logger.js');
const apiRoute = require('./apis');

function init(appserver) {
    appserver.get('*', function (req, res, next) {
        logger.info('Request was made to: ' + req.originalUrl)
        return next();
    });

    logger.info('P-Mex APPLICATION Server initialising routes...');

    appserver.get('/', function (req, res) {
        res.redirect('mexapp-api/home');
    });

    appserver.use('/mexapp-api', apiRoute);
}

module.exports = {
    init: init
};
