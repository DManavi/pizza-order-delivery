/**
 * Routes
 */

'use strict';

const factories = {
    ApiFactory: require('./api')
};

module.exports.create = ({ config, services }) => {

    const routes = {

        api: factories.ApiFactory.create({ config, services })
    };

    return routes;
};