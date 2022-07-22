const mongoose = require('mongoose');

const logs = new mongoose.Schema({
    datetime: {
        required: true,
        type: Number
    },
    adjustment_temperature: {
        required: true,
        type: Number
    },
    pumb_state: {
        required: true,
        type: Boolean
    },
    mHigh_state: {
        required: true,
        type: Boolean
    },
    mLow_state: {
        required: true,
        type: Boolean
    },
    autoMode_state: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('logs', logs)