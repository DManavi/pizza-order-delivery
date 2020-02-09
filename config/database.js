/**
 * Database configuration
 */

'use strict';

module.exports.create = ({ env }) => {

    const config = {
        host: env('DATABASE_HOST').required().asString(),
        port: env('DATABASE_PORT', '5432').asInt(),
        name: env('DATABASE_NAME').required().asString(),

        username: env('DATABASE_USER').required().asString(),
        password: env('DATABASE_PASS').required().asString(),

        maximumClients: env('DATABASE_MAX_CLIENTS', '100').asInt(),
        idleTimeout: env('DATABASE_TIMEOUT', '30s').asString()
    };

    return config;
};