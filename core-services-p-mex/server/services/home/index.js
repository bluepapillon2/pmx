'use strict';

// Declare project modules
const logger = require('../../../configs/logger.js')

function getHome (req, res) {
   // Log message to console
   var message = "Check P-Mex core service GET:/p-mex responding to client";
   logger.info(message);

   // Return message via API
   var obj = { message: "Check Server - this is P-Mex Core Service responding to client"}
   var response = JSON.stringify(obj)
   res.send(response);
}

module.exports = {
    getHome: getHome,
};
