/**
 * Database service
 */

'use strict';

const ms = require('ms');
const { Sequelize } = require('sequelize');

module.exports.create = ({ host, port, name, username, password, maximumClients, idleTimeout }) =>
    new Sequelize(
        {
            dialect: 'postgres',
            host,
            port,
            database: name,
            username,
            password,
            pool: {
                idle: ms(idleTimeout),
                max: maximumClients
            }
        }
    );