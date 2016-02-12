var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

module.exports = router;
router.post('/open',controllers.openDoor);
router.get('/autoOpen',controllers.autoOpenStatus);
router.post('/autoOpen',controllers.autoOpen);