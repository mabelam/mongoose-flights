const ticket = require('../models/tickets');
const flight = require('..models/flight');

module.exports = {
    new: newTicket,
    create
};

async function newTicket(req,res) {
        const flight = await flight.findbyId(req.params.id);
        const tickets = await ticket.find({}).sort('seat');
        res.render('new', {flight, tickets});
}
async function create(req,res) {
    const flight = await flight.findbyId(req.params.id);
    const tickets = await Ticket.findById(req.params.id);
    try {
        await ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}/tickets/new`);
}