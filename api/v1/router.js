var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

module.exports = router;
router.get('/open',controllers.openDoor);
