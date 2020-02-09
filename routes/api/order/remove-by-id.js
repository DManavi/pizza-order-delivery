/**
 * Remove by id
 */

'use strict';

module.exports.create = ({ removeById }) =>
    (req, res, next) =>
        removeById({ orderId: req.params.id })
            .then(() => res.status(204).send())
            .catch(next);