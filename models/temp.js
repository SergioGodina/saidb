const mongoose = require('mongoose');

const temp = new mongoose.Schema({
    datetime: {
        required: true,
        type: String
    },
    current_temperature: {
        required: true,
        type: String
    },
    current_humidity: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('temp', temp)