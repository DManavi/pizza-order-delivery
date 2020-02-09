/**
 * Validations
 */

'use strict';

const factories = {

    CreateFactory: require('./create.js'),
};

module.exports.create = () => {

    const output = {
        create: factories.CreateFactory.create(),

        statuses: require('./statuses.js')
    };

    return output;
};