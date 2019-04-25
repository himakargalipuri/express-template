const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const listEndpoints = require('express-list-endpoints')
const config = require('./config')
const app = express()

const _listRoutes = () => {
    console.log(' ')
            console.log('Available routes..')
            console.log(listEndpoints(app))
            console.log(' ')
}
const start = () => {
    return new Promise((Resolve, Reject) => {
        

        app.use(morgan('dev'))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())

        const routes = require('./routes/main')

        app.use('/', routes)
        console.log('Starting server..')
        app.listen(config.port, () => Resolve())
            .on('error', (err) => { Reject(err) })
            _listRoutes()
    })

}

module.exports = { start, app }