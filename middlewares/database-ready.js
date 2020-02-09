/**
 * Database-ready middleware
 */

'use strict';

const Async = require('async');

module.exports.create = ({ connection }) => {

    let connected = false;
    let synchronized = false;

    return (req, res, next) => Async.series(
        [
            /**
             * Try connect to the database
             */
            (cb) => {

                if (connected) { return cb(); }

                connection
                    .authenticate()
                    .then(() => {
                        connected = true;
                        return cb();
                    })
                    .catch(cb);
            },

            /**
             * Try synchronize the database model
             */
            (cb) => {

                if (synchronized) { return cb(); }

                connection
                    .sync()
                    .then(() => {
                        synchronized = true;
                        return cb();
                    })
                    .catch(cb);
            }
        ],
        next
    );
};