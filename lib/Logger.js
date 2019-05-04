'use strict';

const winston = require('winston');

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'info',
            colorize: true,
            timestamp: true,
        }),
        new (winston.transports.File)({
            filename: 'logfile.log',
            level: 'debug',
            colorize: true,
            timestamp: true,
        }),
    ],
});

module.exports = logger;
