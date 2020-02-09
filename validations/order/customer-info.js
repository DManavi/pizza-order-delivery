/**
 * Customer infor
 */

'use strict';

const Joi = require('@hapi/joi');

module.exports.create = () => {

    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
    });

    return schema;
};