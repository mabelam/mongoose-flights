const flight = require('../models/flights');

module.exports = {
    create
};

async function create(req,res) {
    const flight = await flight.findById(req.params.id);
    flight.destination.push(req.body);
    try{
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/flights/${flight._id}');
}