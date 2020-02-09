/**
 * Logger middleware
 */

'use strict';

const morgan = require('morgan');

module.exports.create = ({ envName }) => {

    let format = 'dev';

    if (envName === 'prod') {
        format = 'tiny';
    }

    return morgan(format);
};