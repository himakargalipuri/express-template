const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Welcome to my user world')
})

router.post('/', (req, res) => {
    res.status(200).send('Welcome to post user world')
})

router.put('/', (req, res) => {
    res.status(200).send('Welcome to put user world')
})

router.delete('/', (req, res) => {
    res.status(200).send('Welcome to delete user world')
})

module.exports = router