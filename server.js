// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require("express");
var app = express();
var http = require('http').Server(app);
var auth = require('http-auth');

// set our port
var port = process.env.PORT || 3000;

// set environment
global.env                  = process.env.NODE_ENV || 'development';
global.app                  = app;
global.httpStatusCodes      = require('./lib/helpers/http-status-codes')

// ROUTES FOR OUR API
// =============================================================================
//start main router
require('./api/main-router')()

// START THE SERVER
// =============================================================================
// TODO: Remember to add DB like Redis, Mongo or other DB to share states between processes


var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("apidoc -i api/ -o ./docs/", puts);

// Basic authentication
var basic = auth.basic({
        realm: "Wayna bell Documentation",
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === "WaynaBell" && password === "waynaaaaa");
    }
);

var authMiddleware = auth.connect(basic);
app.use('/docs',authMiddleware,express.static(__dirname + '/docs'));



http.listen(port, function() {
  console.log("Wayna well api " running on http://localhost:" + port);
});
