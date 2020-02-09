/**
 * Validate body
 */

'use strict';

const createError = require('http-errors');

/**
 * Validate request body against the provided schema
 */
module.exports.create = ({ schema }) =>
    (req, res, next) =>
        schema.validateAsync(req.body || {})
            .then(() => next())
            .catch(err => next(createError(400, err)));