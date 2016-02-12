var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

module.exports = router;
router.post('/open',controllers.openDoor);
router.get('/auto_open',controllers.autoOpenStatus);
router.post('/auto_open',controllers.autoOpen);