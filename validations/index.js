/**
 * Validations
 */

'use strict';

const factories = {
    OrderFactory: require('./order')
};

/**
 * Create a new instance of the validations
 */
module.exports.create = () => {

    const output = {
        order: factories.OrderFactory.create()
    };

    return output;
};