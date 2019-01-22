'use strict';

// Declare project modules
const logger = require('../../../configs/logger.js')

function getHome (req, res) {
   // Log message to console
   var message = "Check Aurius core service GET:/aurius responding to client";
   logger.verbose(message);

   // Return message via API
   var obj = { message: "Check Server - this is Aurius Core Service responding to client"}
   var response = JSON.stringify(obj)
   res.send(response);
}

module.exports = {
    getHome: getHome,
};
