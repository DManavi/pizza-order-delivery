/**
 * Fetch status by id
 */

'use strict';

const createError = require('http-errors');

module.exports.create = ({ fetchStatusById }) => (req, res, next) =>
    fetchStatusById({ orderId: req.params.id })
        .then(order => {

            if (!order) {
                return next(createError[404]());
            }

            return res.status(200).send(order);
        })
        .catch(next);