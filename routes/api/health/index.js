/**
 * health router
 */

'use strict';

const express = require('express');

const routesFactory = {
    GetHealth: require('./get.js')
};

/**
 * Create a new health router
 */
module.exports.create = ({ appName, appVersion }) => {

    const router = express.Router();

    router.get('/', routesFactory.GetHealth.create({ appName, appVersion }));

    return router;
};