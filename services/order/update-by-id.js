/**
 * Update an order by it's ID
 */

'use strict';

const Async = require('async');

const guards = {

    notFound: async ({ model, id }) => {

        const output = await model.findOne(
            {
                where: {
                    id
                },
                attributes: ['id', 'status']
            }
        );

        if (!output) {
            throw new Error('ENOTFOUND');
        }

        return output;
    },

    canUpdateOrderStatus: ({ currentStatus, newStatus, statuses }) => {

        // no status update requested
        if (!newStatus) { return; }

        if (currentStatus === newStatus) { throw new Error('EINVALIDSTATUS'); }

        // just allow move forward
        if (statuses.indexOf(currentStatus) > statuses.indexOf(newStatus)) { throw new Error('EINVALIDSTATUS'); }
    },

    canChangeOrder: ({ currentStatus }) => {

        switch (currentStatus) {
            case 'delivering':
            case 'delivered':
                {
                    throw new Error('EINVALIDSTATUS');
                }
        }
    }
}

module.exports.create = ({ database, validations }) => async ({ orderId, order }) => {

    const transaction = await database.connection.transaction({
        autocommit: false
    });

    let output = undefined;
    let committed = false;

    try {

        // Guards
        const currentOrder = await guards.notFound({ model: database.models.Order, id: orderId });

        // update items if requested
        if (order.items) {

            // check if order is updatable
            guards.canChangeOrder({ currentStatus: currentOrder.status });

            // remove all previous items
            await database.models.OrderItem.destroy(
                {
                    where: {
                        OrderId: orderId
                    }
                }
            );

            // add new items
            // create order items and attach to the order
            await Async.map(
                order.items,
                (orderItem, cb) => {

                    database.models.OrderItem.create(
                        {
                            ...orderItem,
                            OrderId: orderId
                        },
                        {
                            transaction
                        }
                    )
                        .then(orderItemModel => cb(null, orderItemModel))
                        .catch(cb);
                }
            );
        }

        // update status if requested
        if (order.status) {

            // check if the order status is updatable
            guards.canUpdateOrderStatus({ currentStatus: currentOrder.status, newStatus: order.status, statuses: validations.order.statuses });

            await database.models.Order.update(
                {
                    status: order.status
                },
                {
                    where: {
                        id: orderId
                    }
                }
            );
        }

        await transaction.commit();
        committed = true;

        // retrieve the updated order
        output = await database.models.Order.findOne(
            {
                where: {
                    id: orderId
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