/**
 * Remove by id
 */

'use strict';

const createError = require('http-errors');

module.exports.create = ({ removeById }) =>
    (req, res, next) =>
        removeById({ orderId: req.params.id })
            .then((result) => {

                if (result.deletedItemsCount === 0) {
                    return next(createError[404]());
                }

                return res.status(204).send();
            })
            .catch(next);