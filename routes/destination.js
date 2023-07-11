var express = require('express');
var router = express.router();
var desinationCtrl = require('../controllers/destination')

//post flight destination id

router.post('flights/:id/destination', desinationCtrl.create);

module.exports = router;