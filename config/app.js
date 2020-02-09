/**
 * Application-level configuration
 */

'use strict';

module.exports.create = ({ envName, appName, appVersion }) => {

    return {
        appName,
        appVersion,

        envName
    };
};