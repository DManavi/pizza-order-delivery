/**
 * Update by id
 */

'use strict';

module.exports.create = ({ updateById }) =>
    (req, res, next) =>
        updateById({ id: req.params.id, order: { ...req.body } })
            .then(order => res.status(200).send(order))
            .catch(next);