/**
 * API routes
 */

'use strict';

const express = require('express');

const routes = {
    OrderFactory: require('./order'),

    HealthFactory: require('./health')
};

module.exports.create = ({ config, services, validations, middlewares }) => {

    // intentionally, I've added an application cause I wanted to add nested routers to it.
    const app = express();
    app.use(express.json());

    /* ************************* */
    /* THESE ARE THE MAIN ROUTES */
    /* ************************* */
    app.use('/order', routes.OrderFactory.create({ services, validations, middlewares }));
    /* ************************* */

    // since this route is not the main part of the application, 
    // I add it here
    app.use('/_health', routes.HealthFactory.create({ ...config }));

    return app;
};