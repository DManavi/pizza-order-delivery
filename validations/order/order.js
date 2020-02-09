/**
 * Order validation model
 */

'use strict';

const Joi = require('@hapi/joi');

module.exports.create = ({ orderItemFactory, customerInfoFactory, pizzaSizes, pizzaTypes, statuses, isUpdate }) => {

    const validationBody = {
        items: Joi.array()
    };

    if (isUpdate) {
        validationBody.items = validationBody.items.optional();
    }
    else {
        validationBody.items = validationBody.items.required();
    }

    validationBody.items = validationBody.items.min(1).items(orderItemFactory.create({ pizzaSizes, pizzaTypes }));

    if (!!customerInfoFactory) {
        validationBody.customer = customerInfoFactory.create().required();
    }

    if (!!statuses) {
        validationBody.status = Joi.string().valid(...statuses).optional().options({ allowUnknown: false });
    }

    const schema = Joi.object(validationBody);

    return schema;
};