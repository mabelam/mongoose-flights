var express = require('express');
const flight = require('../models/flight');
var router = express.Router();

//get flight
router.get('/', flightsCtrl.index);

//get new flight
router.get('/new', flightsCtrl.new);

//show flight
router.get('/:id', flightsCtrl.show);

//post
router.post('/', flightsCtrl.create);

module.exports = router;
