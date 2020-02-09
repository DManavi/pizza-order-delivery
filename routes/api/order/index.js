/**
 * Order routes
 */

'use strict';

const express = require('express');

const routes = {
    CreateFactory: require('./create.js'),
    FetchByIdFactory: require('./fetch-by-id.js'),
    ListFactory: require('./list.js'),
    UpdateFactory: require('./update-by-id.js'),
    RemoveByIdFactory: require('./remove-by-id')
};

/**
 * Create a new order router
 */
module.exports.create = ({ services, validations, middlewares }) => {

    const router = express.Router();

    // create a new order
    router.post('/', [
        middlewares.ValidateBody.create({ schema: validations.order.create }),
        routes.CreateFactory.create({ ...services.order })
    ]);

    // Retrieve an order using it's ID
    router.get('/:id', routes.FetchByIdFactory.create({ ...services.order }));

    // Filter the list of orders using both status and customer information
    router.get('/', [
        middlewares.OrderSearch.create(),
        middlewares.OrderFilter.create({ validOrderStatuses: validations.order.statuses }),
        routes.ListFactory.create({ ...services.order })
    ]);

    // Update the parameters of an order
    router.put('/:id', [
        middlewares.ValidateBody.create({ schema: validations.order.update }),
        routes.UpdateFactory.create({ ...services.order })
    ]);

    // Delete an order using it's ID
    router.delete('/:id', routes.RemoveByIdFactory.create({ ...services.order }));

    return router;
};