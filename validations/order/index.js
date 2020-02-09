/**
 * Validations
 */

'use strict';

const factories = {

    CustomerInfoFactory: require('./customer-info.js'),

    OrderFactory: require('./order.js'),
    OrderItemFactory: require('./order-item.js')
};

module.exports.create = () => {

    const statuses = require('./statuses.js');
    const pizzaSizes = require('./pizza-sizes.js');
    const pizzaTypes = require('./pizza-types.js');

    const output = {
        create: factories.OrderFactory.create({
            orderItemFactory: factories.OrderItemFactory,
            customerInfoFactory: factories.CustomerInfoFactory,
            pizzaSizes,
            pizzaTypes
        }),

        update: factories.OrderFactory.create({
            orderItemFactory: factories.OrderItemFactory,
            pizzaSizes,
            pizzaTypes,
            statuses
        }),

        pizzaSizes,
        pizzaTypes,
        statuses
    };

    return output;
};