/**
 * Meta
 */

'use strict';

module.exports.create = () => (req, res, next) => {

    req.meta = req.meta || {};

    return next();
};