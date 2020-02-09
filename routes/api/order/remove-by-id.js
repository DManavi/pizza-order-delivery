/**
 * Remove by id
 */

'use strict';

module.exports.create = ({ deleteById }) =>
    (req, res, next) =>
        deleteById({ id: req.params.id })
            .then(() => res.status(204).send())
            .catch(next);