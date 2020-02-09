/**
 * Middlewares
 */

'use strict';

module.exports = {
    ErroHandlerFactory: require('./error-handler.js'),
    LoggerFactory: require('./logger.js'),
    NotFound: require('./not-found.js'),
};