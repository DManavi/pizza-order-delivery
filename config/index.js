/**
 * Configuration
 */

'use strict';

const getEnvName = require('get-env');
const env = require('env-var').get;
const pkg = require('../package.json');

const factories = {
    App: require('./app.js'),
    Database: require('./database.js')
};

module.exports.create = () => {

    const config = {
        ...factories.App.create({ appName: pkg.name, appVersion: pkg.version, envName: getEnvName() }),
        database: factories.Database.create({ env })
    };

    return config;
};