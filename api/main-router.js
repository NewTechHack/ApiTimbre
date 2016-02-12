var express = require('express');

/**
 * Main router.
 * Only routes for API version
 *
 */
var routingTable = require('./routing-table');
module.exports = function () {

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
            res.send(httpStatusCodes.Ok);
        } else {
            next();
        }
    })

    for (var version in routingTable) {
      app.use('/api' + version, routingTable[version]);
    }
}
