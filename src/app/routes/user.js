const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.status(200).send('Welcome to my user world')
})

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