/**
 * Pizza routes
 */

'use strict';

const express = require('express');

const routesFactory = {
};

/**
 * Create a new health router
 */
module.exports.create = ({ appName, appVersion }) => {

    const router = express.Router();

    router.all('*', (req, res) => res.send({ msg: 'pizza' }));

    return router;
};