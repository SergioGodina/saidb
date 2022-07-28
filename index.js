require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const logs = require('./routes/users');
const users = require('./routes/logs');
const temp = require('./routes/temp');
const cors = require('cors');

const app = express();

app.use(express.json(), cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.warn(`App listening on http://localhost:${PORT}`);
});

app.use('/api', logs)

app.use('/api', users)

app.use('/api', temp)

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})