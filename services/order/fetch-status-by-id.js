/**
 * Fetch an order status by it's ID
 */

'use strict';

module.exports.create = ({ database }) => async ({ orderId }) => {

    const order = await database.models.Order.findOne(
        {
            where: {
                id: orderId
            },
            attributes: ['id', 'status']
        }
    );

    return order;
};