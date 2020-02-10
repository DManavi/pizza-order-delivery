/**
 * Fetch status by id
 */

'use strict';

module.exports.create = ({ fetchStatusById }) => (req, res, next) =>
    fetchStatusById({ orderId: req.params.id })
        .then(order => res.status(200).send(order))
        .catch(next);