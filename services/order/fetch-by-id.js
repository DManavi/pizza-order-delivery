/**
 * Fetch an order by it's ID
 */

'use strict';

module.exports.create = ({ database }) => async ({ orderId }) => {

    const order = await database.models.Order.findOne(
        {
            where: {
                id: orderId
            },
            include: [database.models.Customer, database.models.OrderItem]
        }
    );

    return order;
};