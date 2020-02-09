/**
 * List orders
 */

'use strict';

module.exports.create = ({ list }) =>
    (req, res, next) =>
        list({ filter: req.meta.order.filter, search: req.meta.order.search })
            .then(orders => res.status(200).send(orders))
            .catch(next);