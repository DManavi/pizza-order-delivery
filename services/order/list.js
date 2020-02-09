/**
 * List/filter all the orders
 */

'use strict';

module.exports.create = ({ database }) => async ({ filter, search }) => {

    return { filter, search };
};