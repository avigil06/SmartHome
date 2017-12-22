var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({status: true, msg: 'You are now connected to the RPi API Service'});
});

module.exports = router;
