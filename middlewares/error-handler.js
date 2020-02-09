/**
 * Error handler
 */

'use strict';

module.exports.create = ({ envName }) => (err, req, res, next) => {

    res.status(err.statusCode || 500);
    res.statusMessage = err.statusMessage || undefined;

    const showError = envName === 'dev'; // environment name normalized using get-env package

    console.error('ERROR: ', err); // Intentionally used console logger

    res.send({
        error: showError ? err : 'Failed to process your request'
    });
};