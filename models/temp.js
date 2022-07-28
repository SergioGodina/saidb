const mongoose = require('mongoose');

const temp = new mongoose.Schema({
    datetime: {
        required: true,
        type: Number
    },
    current_temperature: {
        required: true,
        type: Number
    },
    current_humidity: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('temp', temp)