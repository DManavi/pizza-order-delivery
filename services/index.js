/**
 * Services factory
 */

'use strict';

const factories = {
    DatabaseFactory: require('./database'),
    OrderFactory: require('./order')
};

module.exports.create = ({ config }) => {

    const database = factories.DatabaseFactory.create({ ...config.database });

    const output = {
        database,
        order: factories.OrderFactory.create({ database })
    };

    return output;
};