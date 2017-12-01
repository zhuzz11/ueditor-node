var express = require('express');
var router = express.Router();

var config = require("../config/config.js");

/* GET home page. */
router.get('/node/controller', function(req, res, next) {
  res.send(config);
});

module.exports = router;
