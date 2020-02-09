/**
 * Routes
 */

'use strict';

const factories = {
    ApiFactory: require('./api')
};

module.exports.create = ({ config, services, validations, middlewares }) => {

    const routes = {

        api: factories.ApiFactory.create({ config, services, validations, middlewares })
    };

    return routes;
};