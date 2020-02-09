/**
 * GET service health
 */

'use strict';

module.exports.create = ({ appName, appVersion }) => (req, res, next) => res.status(200).send({
    ready: 1,
    package: appName,
    version: appVersion,
    uptime: process.uptime(),
    process: {
        id: process.pid,
        cwd: process.cwd(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
    }
});