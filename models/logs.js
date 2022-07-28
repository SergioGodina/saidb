const mongoose = require('mongoose');

const logs = new mongoose.Schema({
    datetime: {
        required: true,
        type: String
    },
    adjustment_temperature: {
        required: true,
        type: String
    },
    pumb_state: {
        required: true,
        type: String
    },
    mHigh_state: {
        required: true,
        type: String
    },
    mLow_state: {
        required: true,
        type: String
    },
    autoMode_state: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('logs', logs)