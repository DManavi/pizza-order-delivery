/**
 * Database models
 */

'use strict';

const factories = {
    CustomerFactory: require('./customer.js'),
    OrderItem: require('./order-item.js'),
    Order: require('./order.js')
};

module.exports.create = ({ connection }) => {

    const models = {
        Customer: factories.CustomerFactory.create({ connection }),
        OrderItem: factories.OrderItem.create({ connection }),
        Order: factories.Order.create({ connection })
    };

    // Setup relations

    // 1 order has N order item(s)
    models.Order.hasMany(models.OrderItem);
    models.OrderItem.belongsTo(models.Order);

    // 1 user has N order(s)
    models.Customer.hasMany(models.Order);
    models.Order.belongsTo(models.Customer);

    return models;
};