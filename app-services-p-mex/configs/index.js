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

let coreBase = {
    auriusCoreBase: thisEnvConfig.corehosts.auriusCore.href + allEnvConfig.roots.auriusCore.href,
    cafbiCoreBase: thisEnvConfig.corehosts.cafbiCore.href + allEnvConfig.roots.cafbiCore.href,
    motorCoreBase: thisEnvConfig.corehosts.motorCore.href + allEnvConfig.roots.motorCore.href,
    pmexCoreBase: thisEnvConfig.corehosts.pMexCore.href + allEnvConfig.roots.pMexCore.href,
    cdsCoreBase: thisEnvConfig.corehosts.cdsCore.href + allEnvConfig.roots.cdsCore.href
};

const finalConfig = _.merge(thisEnvConfig, allEnvConfig, coreBase);

global.gConfig = finalConfig;
  logger.verbose("---------------------------------------------------------------------");
  logger.verbose(`Application Name:     ${global.gConfig.base.app_name}`);
  logger.verbose(`Description:          ${global.gConfig.thisenv.app_desc}`);
  logger.verbose(`Database:             ${global.gConfig.base.database}`);
  logger.verbose(`Node Port:            ${global.gConfig.thisenv.node_port}`);
  logger.verbose("---------------------------------------------------------------------");
  logger.debug(`Aurius CORE Service:  ${global.gConfig.corehosts.auriusCore.href}`);
  logger.debug(`Caf BI CORE Service:  ${global.gConfig.corehosts.cafbiCore.href}`);
  logger.debug(`Motor CORE Service:   ${global.gConfig.corehosts.motorCore.href}`);
  logger.debug(`P-Mex CORE Service:   ${global.gConfig.corehosts.pMexCore.href}`);
  logger.debug(`CDS CORE Service:     ${global.gConfig.corehosts.cdsCore.href}`);
  //logger.verbose(`Final Node Port:      ${JSON.stringify(global.gConfig)}`);
  logger.verbose("---------------------------------------------------------------------");
  logger.verbose(`Aurius CORE Service:  ${global.gConfig.auriusCoreBase}`);
  logger.verbose(`CAF BI CORE Service:  ${global.gConfig.cafbiCoreBase}`);
  logger.verbose(`Motor CORE Service:   ${global.gConfig.motorCoreBase}`);
  logger.verbose(`P-Mex CORE Service:   ${global.gConfig.pmexCoreBase}`);
  logger.verbose(`CDS CORE Service:     ${global.gConfig.cdsCoreBase}`);
  logger.verbose("---------------------------------------------------------------------");

//  logger.debug(`global.gConfig: ${JSON.stringify(global.gConfig)}`);
// logger.debug("Configure environment on " + env + " and " + envConfig.port);

let defaultConfig = {
    env: env,
    hostname: finalConfig.thisenv.hostname,
    port: finalConfig.thisenv.node_port
};
  logger.debug(`env: ${JSON.stringify(defaultConfig)}`);

module.exports = _.merge(defaultConfig);
