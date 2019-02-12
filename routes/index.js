const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Welcome to my world')
})

router.post('/', (req, res) => {
    res.status(200).send('Welcome to post world')
})

router.put('/', (req, res) => {
    res.status(200).send('Welcome to put world')
})

router.delete('/', (req, res) => {
    res.status(200).send('Welcome to delete world')
})

module.exports = router