const express = require('express')
const dataController = require('../controllers/data')
const router = express.Router()

router.get('/all', dataController.getAllData)

router.post('/register', (req, res) => {
    res.status(200).send('Welcome to post user world')
})

router.put('/verify', (req, res) => {
    res.status(200).send('Welcome to put user world')
})

router.delete('/forgot', (req, res) => {
    res.status(200).send('Welcome to delete user world')
})

module.exports = router