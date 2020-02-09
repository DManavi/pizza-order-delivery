/**
 * Order search middleware
 */

'use strict';

module.exports.create = () => (req, res, next) => {

    req.meta.order = req.meta.order || {};
    req.meta.order.search = {
        name: req.query.name || undefined,
        address: req.query.address || undefined
    };

    return next();
};