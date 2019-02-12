const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config')

const start = () => {
    return new Promise((Resolve, Reject) => {
        const app = express()

        app.use(morgan('dev'))
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

        const routes = require('./routes/main')

        app.use('/', routes)
        app.listen(config.port, () => Resolve(config.port))
            .on('error', (err) => Reject(err))
    })
    
}

module.exports = {start}