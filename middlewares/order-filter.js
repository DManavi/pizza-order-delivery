/**
 * Order filter middleware
 */

'use strict';

module.exports.create = ({ validOrderStatuses }) => (req, res, next) => {

    const requestedStatus = req.query.status;

    req.meta.order = req.meta.order || {};
    req.meta.order.filter = {
        status: validOrderStatuses.indexOf(requestedStatus) > -1 ? requestedStatus : undefined
    };

    return next();
};