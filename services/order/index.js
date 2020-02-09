/**
 * Order service(s)
 */

'use strict';

const factories = {

    CreateFactory: require('./create.js'),
    FetchByIdFactory: require('./fetch-by-id.js'),
    ListFactory: require('./list.js'),
    RemoveByIdFactory: require('./remove-by-id.js'),
    UpdateByIdFactory: require('./update-by-id.js')
};

module.exports.create = ({ database }) => {

    return {
        createNewOrder: factories.CreateFactory.create({ database }),
        fetchById: factories.FetchByIdFactory.create({ database }),
        list: factories.ListFactory.create({ database }),
        removeById: factories.RemoveByIdFactory.create({ database }),
        updateById: factories.UpdateByIdFactory.create({ database }),
    };
};