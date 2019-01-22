'use strict';

const logger = require('../configs/logger.js');
const fs = require('fs');
const dotenv = require('dotenv');
const _ = require('lodash');

dotenv.config();
const env = process.env.NODE_ENV;
  logger.verbose("Starting service in environment : " + env);

const thisEnvJson = './configs/' + process.env.NODE_ENV + '.json'

const allEnvConfig = JSON.parse(fs.readFileSync('./configs/all-envs.json'));
const thisEnvConfig = JSON.parse(fs.readFileSync(thisEnvJson));

const finalConfig = _.merge(thisEnvConfig, allEnvConfig);

    global.gConfig = finalConfig;
      logger.verbose("---------------------------------------------------------------------");
      logger.verbose(`Application Name:     ${global.gConfig.base.app_name}`);
      logger.verbose(`Description:          ${global.gConfig.thisenv.app_desc}`);
      logger.verbose(`Database Name:        ${global.gConfig.base.databasename}`);
      logger.verbose(`Node Port:            ${global.gConfig.thisenv.node_port}`);
      logger.verbose("---------------------------------------------------------------------");


      let defaultConfig = {
          env: env,
          hostname: finalConfig.thisenv.hostname,
          port: finalConfig.thisenv.node_port
      };
        logger.debug(`env: ${JSON.stringify(defaultConfig)}`);

module.exports = _.merge(defaultConfig);
//module.exports = finalConfig;
