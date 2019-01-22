'use strict';

// Declare project modules
const logger = require('../../../configs/logger.js');
//const call = require('./invoke-r.js');
const rscript = require('js-call-r');

const defaultOptions = {
    verboseResult: true
}

function postExecution(req, res) {

  // Log message to console
  var message = "Execute model.  POST:/p-mex-api/executions invoking an R calculation";
  logger.info(message);

  logger.info('call R script to calc(Sync) "1 + 3 = "');

  // const result= call.callSync('./echo.R');

  const result = rscript.callSync('./echo.R');
  
  logger.info(JSON.stringify(result));

    res.json(JSON.stringify(result));
}

function getExecutionWithId(req, res) {

  // Log message to console
  var message = "Retrieve selected model.  GET:/api/models/:id responding to client";
  logger.info(message);

    let id = req.params.id || 0,
        result = {};

     for (let i = 0; i < models.length; i++) {
        if (models[i].id == id) {
            result = models[i];
            break;
        }
     }

     res.json(result);
}

module.exports = {
    postExecution: postExecution,
    getExecutionWithId: getExecutionWithId
};
