const mongoose = require('mongoose');

const users = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    rol: {
        required: true,
        type: String
    },
    state: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('users', users)