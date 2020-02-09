/**
 * API routes
 */

'use strict';

const express = require('express');

const routesFactory = {
    health: require('./health'),
    order: require('./order')
};

module.exports.create = ({ config, services }) => {

    const app = express();

    app.use('/health', routesFactory.health.create({ ...config }));

    return app;
};