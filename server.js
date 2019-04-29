const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const listEndpoints = require('express-list-endpoints')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const winston = require('winston')
const config = require('./config')
const httpLogger = require('./src/utils/http-logger')
const _printIp = require('./src/utils/ip')

const app = express()
/**
 * Console logs all registered routes
 */
const _listRoutes = () => {
    console.log(' ')
    console.log('Available routes..')
    console.log(listEndpoints(app))
    console.log(' ')
}

const start = () => {
    return new Promise((Resolve, Reject) => {


        app.use(morgan("combined", { "stream": httpLogger.stream }))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(cors())
        app.use(helmet())
        app.use(compression())

        // centrally catch all api errors
        app.use((err, req, res, next) => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })

        // import all routes
        const routes = require('./src/app/routes/main')

        app.use('/v1', routes)

        console.log('Starting server..')
        app.listen(config.port, '0.0.0.0', () => { _printIp(config.port); Resolve() })
            .on('error', (err) => { Reject(err) })

        // comment this line in production mode 
        _listRoutes()
    })

}

module.exports = { start, app }