/**
 * Express application
 */

'use strict';

const express = require('express');

const ConfigFactory = require('./config');
const middlewares = require('./middlewares');

/**
 * Create a new instance of the express application
 */
module.exports.create = () => {

    const app = express();
    const config = ConfigFactory.create();

    app.use(middlewares.LoggerFactory.create({ ...config }));

    /* PLEASE ADD YOUR ROUTES AFTER THIS LINE */


    /* PLEASE ADD YOUR ROUTES BEFORE THIS LINE */

    // THIS IS THE NOT FOUND HANDLER
    app.use(middlewares.NotFound.create());

    // DO NOT ADD ANY OTHER HANDLER AFTER THIS ONE
    // THIS IS THE FINAL HANDLER WHICH IS RESPONSIBLE
    // FOR HANDLING ERRORS
    app.use(middlewares.ErroHandlerFactory.create({ ...config }));

    return { app };
};