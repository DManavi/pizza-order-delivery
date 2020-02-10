/**
 * Remove an order by it's ID
 */

'use strict';

module.exports.create = ({ database }) => async ({ orderId }) => {

    const transaction = await database.connection.transaction({
        autocommit: false
    });

    let committed = false;
    let deletedItemsCount = 0;

    try {

        // remove order items
        deletedItemsCount += await database.models.OrderItem.destroy(
            {
                where: {
                    OrderId: orderId
                }
            }
        );

        // remove order
        deletedItemsCount += await database.models.Order.destroy(
            {
                where: {
                    id: orderId
                }
            }
        );

        await transaction.commit();
        committed = true;
    }
    catch (err) {

        if (!committed) {
            await transaction.rollback();
        }

        throw err;
    }

    return { id: orderId, deletedItemsCount };
};