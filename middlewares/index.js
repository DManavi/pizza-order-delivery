/**
 * Middlewares
 */

'use strict';

module.exports = {
    DatabaseReadyFactory: require('./database-ready.js'),
    ErroHandlerFactory: require('./error-handler.js'),
    LoggerFactory: require('./logger.js'),
    MetaFactory: require('./meta.js'),
    NotFound: require('./not-found.js'),
    OrderFilter: require('./order-filter.js'),
    OrderSearch: require('./order-search.js'),
    ValidateBody: require('./validate-body.js'),
};