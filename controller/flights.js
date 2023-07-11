const flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index,
    create, 
    show
};

async function show(req,res){
    const flights = await flight.findById(req.params.id);
    res.render("flights/show", {title: "Flight Details", flight});
}

async function show(req, res){
    const flights = await flight.find({});
    res.render("flights/index", {flights});
}

function newFlight(req,res) {
    res.render("flights/new");
}

