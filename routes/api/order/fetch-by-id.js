/**
 * Fetch by id
 */

'use strict';

module.exports.create = ({ fetchById }) => (req, res, next) =>
    fetchById({ orderId: req.params.id })
        .then(order => res.status(200).send(order))
        .catch(next);