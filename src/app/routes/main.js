const express = require('express')
const router = express.Router()
const indexRoutes = require('./index')
const userRoutes = require('./user')

// imports all routes to one file 
router.use('/', indexRoutes)
router.use('/user', userRoutes)

module.exports = router