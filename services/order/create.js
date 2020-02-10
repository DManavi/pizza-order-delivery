/**
 * Create a new order
 */

'use strict';

const Async = require('async');

module.exports.create = ({ database }) => async ({ order }) => {

    const transaction = await database.connection.transaction({
        autocommit: false,
    });

    let output = undefined;
    let committed = false;

    try {

        // create customer
        const customerModel = await database.models.Customer.create({ ...order.customer }, { transaction });

        // create order
        const orderModel = await database.models.Order.create(
            {
                CustomerId: customerModel.id
            },
            {
                transaction
            }
        );

        // create order items and attach to the order
        await Async.map(
            order.items,
            (orderItem, cb) => {

                database.models.OrderItem.create(
                    {
                        ...orderItem,
                        OrderId: orderModel.id
                    },
                    {
                        transaction
                    }
                )
                    .then(orderItemModel => cb(null, orderItemModel))
                    .catch(cb);
            }
        );

        await transaction.commit();
        committed = true;

        output = await database.models.Order.findOne(
            {
                where: {
                    id: orderModel.id
                },
                include: [database.models.Customer, database.models.OrderItem]
            }
        );
    }
    catch (err) {

        if (!committed) {
            await transaction.rollback();
        }

        throw err;
    }

    return output;
};