
const appRoot = require('app-root-path');
//const winston = require('winston');

const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: 'YYYY-MM-DD'
});

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level} : ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

logger.info('Winston logging tool initialised');
logger.debug('Test: Debug message');
logger.verbose('Test: Verbose message');
logger.warn('Test: Warning message');
logger.error('Test: Error message');


/*

var options = {
  errorfile: {
    level: 'info',
  //  filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 3,
    colorize: false
  },
  combined: {
    level: 'info',
    filename: '../../logs/combined.log',
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 3,
    colorize: false
  },
  consol: {
    level: 'info',
    handleExceptions: true,
    timestamp: 'YYYY-MM-DD HH:mm:ss',
    json: false,
    colorize: true
    //printf(info => { `${info.timestamp} ${info.level}: ${info.message}`})
  }
};
winston.format.printf(info =>  `${info.timestamp} ${info.level}: ${info.message}`);

const logger =  winston.createLogger({
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
  //  new winston.transports.File({ filename: options.errorfile, level: 'error' }),
  //  new winston.transports.File(options.combined ),
    new winston.transports.Console(options.consol)
  ],
  exitOnError: false, // do not exit on handled exceptions
});



//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
    format: winston.format.simple() */
//    logger.add(new winston.transports.Console(options.consol));
//}

module.exports = logger;
