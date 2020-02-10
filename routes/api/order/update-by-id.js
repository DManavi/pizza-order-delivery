/**
 * Update by id
 */

'use strict';

const createError = require('http-errors');

module.exports.create = ({ updateById }) =>
    (req, res, next) =>
        updateById({ orderId: req.params.id, order: { ...req.body } })
            .then(order => res.status(200).send(order))
            .catch(err => {

                switch (err.message) {
                    case 'ENOTFOUND': {
                        return next(createError[404]());
                        break;
                    }

                    case 'EINVALIDSTATUS': {
                        return next(createError.UnprocessableEntity());
                        break;
                    }

                    // unhandled error
                    default: {
                        return next(err);
                    }
                }
            });