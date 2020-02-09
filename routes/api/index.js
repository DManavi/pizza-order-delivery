/**
 * API routes
 */

'use strict';

const express = require('express');

const routesFactory = {
    customer: require('./customer'),
    order: require('./order'),
    pizza: require('./pizza'),
    pizzaSize: require('./pizza-size'),

    health: require('./health')
};

module.exports.create = ({ config, services, middlewares }) => {

    // intentionally, I've added an application cause I wanted to add nested routers to it.
    const app = express();

    /* ************************* */
    /* THESE ARE THE MAIN ROUTES */
    /* ************************* */
    app.use('/customer', routesFactory.customer.create({ services, middlewares }));
    app.use('/order', routesFactory.order.create({ services, middlewares }));
    app.use('/pizza', routesFactory.pizza.create({ services, middlewares }));
    app.use('/pizza-size', routesFactory.pizzaSize.create({ services, middlewares }));
    /* ************************* */

    // since this route is not the main part of the application, 
    // I add it here
    app.use('/_health', routesFactory.health.create({ ...config }));

    return app;
};