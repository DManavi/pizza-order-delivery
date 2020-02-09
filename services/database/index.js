/**
 * Database service
 */

'use strict';

const ms = require('ms');
const { Sequelize } = require('sequelize');

const ModelsFactory = require('./models');

module.exports.create = ({ host, port, name, username, password, maximumClients, idleTimeout }) => {

    // initialize sequelize
    const connection = new Sequelize(
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

    // initialize models
    const models = ModelsFactory.create({ connection });

    return { connection, models };
}