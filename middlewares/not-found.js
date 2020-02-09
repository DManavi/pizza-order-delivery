/**
 * Not found error
 */

'use strict';

const createError = require('http-errors');

module.exports.create = () => (req, res, next) => next(createError[404]());