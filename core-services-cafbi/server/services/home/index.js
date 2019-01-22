'use strict';

// Declare project modules
const logger = require('../../../configs/logger.js')

function getHome (req, res) {
   // Log message to console
   var message = "Check CAF BI core service GET:/cafbi responding to client";
   logger.verbose(message);

   // Return message via API
   var obj = { message: "Check Server - this is CAF BI Core Service responding to client"}
   var response = JSON.stringify(obj)
   res.send(response);
}

module.exports = {
    getHome: getHome,
};
