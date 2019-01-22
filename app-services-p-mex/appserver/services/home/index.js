'use strict';

//const process = require('process');
const winston = require('../../../configs/logger.js');
const http = require('http');

// -----------------------------------------------------------------------------------
function getHome(req, res) {

   winston.info("P-Mex Application service GET:mexapp-api/home starting work");

   res.send("Hello World");
}


module.exports = {
    getHome: getHome
};
