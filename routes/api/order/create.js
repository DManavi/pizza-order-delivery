/**
 * Create a new order
 */

'use strict';

module.exports.create = ({ createNewOrder }) => (req, res, next) =>
    createNewOrder({ order: { ...req.body } })
        .then(order => res.status(200).send(order))
        .catch(next);