/**
 * Order validation model
 */

'use strict';

const Joi = require('@hapi/joi');

module.exports.create = ({ orderItemFactory, customerInfoFactory, pizzaSizes, pizzaTypes, statuses }) => {

    const validationBody = {
        items: Joi.array().required().min(1).items(orderItemFactory.create({ pizzaSizes, pizzaTypes })),
    };

    if (!!customerInfoFactory) {
        validationBody.customer = customerInfoFactory.create().required();
    }

    if (!!statuses) {
        validationBody.status = Joi.string().valid(...statuses).optional().options({ allowUnknown: false });
    }

    const schema = Joi.object(validationBody);

    return schema;
};