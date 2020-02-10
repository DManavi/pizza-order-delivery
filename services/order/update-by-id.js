/**
 * Update an order by it's ID
 */

'use strict';

module.exports.create = ({ database }) => async ({ orderId }) => {

    return { id: orderId };
};