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
        current_humedity: req.body.current_humedity
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
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

//Get by ID Method
router.get('/temp/getOne/:id', async(req, res) => {
    try {
        const data = await Temp.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/temp/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Temp.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/temp/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Temp.findByIdAndDelete(id)
        res.send(`A Document has been deleted.. ${req.params.id}`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})