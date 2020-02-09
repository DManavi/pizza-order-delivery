/**
 * Routes
 */

'use strict';

const factories = {
    ApiFactory: require('./api')
};

module.exports.create = ({ config, services, middlewares }) => {

    const routes = {

        api: factories.ApiFactory.create({ config, services, middlewares })
    };

    return routes;
};