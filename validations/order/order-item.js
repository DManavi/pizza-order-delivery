/**
 * Order item
 */

'use strict';

const Joi = require('@hapi/joi');

module.exports.create = ({ pizzaTypes, pizzaSizes }) => {

    const schema = Joi.object({
        qty: Joi.number().required().min(1),
        type: Joi.string().required().valid(...pizzaTypes),
        size: Joi.string().required().valid(...pizzaSizes)
    });

    return schema;
};