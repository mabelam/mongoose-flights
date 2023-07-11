const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//define flight schema
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'LAX', 'SAN'],
        required: true
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            const oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow()+1);
            return oneYearFromNow;
        }
    },
    destinations: [destinationsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);