/**
 * List/filter all the orders
 */

'use strict';

const { Op } = require('sequelize');

module.exports.create = ({ database }) => async ({ filter, search }) => {

    const where = {};

    if (filter.status) {
        where.status = filter.status;
    }

    if (search.name) {
        where['$Customer.name$'] = {
            [Op.iLike]: `%${search.name}%`
        };
    }

    if (search.address) {
        where['$Customer.address$'] = {
            [Op.iLike]: `%${search.address}%`
        };
    }

    const orders = await database.models.Order.findAll(
        {
            where,
            include: [database.models.Customer, database.models.OrderItem]
        }
    );

    return orders;
};