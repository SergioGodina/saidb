const express = require('express');
const router = express.Router()
const Temp = require('../models/temp');

module.exports = router;

//temp

//Post Method
router.post('/temp/post', async(req, res) => {
    const data = new Temp({
        datetime: req.body.datetime,
        current_temperature: req.body.current_temperature,
        current_humidity: req.body.current_humidity
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/temp/getAll', async(req, res) => {
    try {
        const data = await Temp.find().sort({ _id: -1 });
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/temp/getLast', async(req, res) => {
    try {
        const data = await Temp.find().sort({ _id: -1 }).limit(1);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})