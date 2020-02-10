/**
 * Fetch by id
 */

'use strict';

const createError = require('http-errors');

module.exports.create = ({ fetchById }) => (req, res, next) =>
    fetchById({ orderId: req.params.id })
        .then(order => {

            if (!order) {
                return next(createError[404]());
            }

            return res.status(200).send(order);
        })
        .catch(next);