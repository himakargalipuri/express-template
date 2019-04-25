const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const listEndpoints = require('express-list-endpoints')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const winston = require('winston')
const config = require('./config')
const app = express()

const _listRoutes = () => {
    console.log(' ')
    console.log('Available routes..')
    console.log(listEndpoints(app))
    console.log(' ')
}

let logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
})

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
const start = () => {
    return new Promise((Resolve, Reject) => {


        app.use(morgan("combined", { "stream": logger.stream }))
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(cors())
        app.use(helmet())
        app.use(compression())
        app.use((err, req, res, next) => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })

        const routes = require('./routes/main')

        app.use('/', routes)
        console.log('Starting server..')
        app.listen(config.port, () => Resolve())
            .on('error', (err) => { Reject(err) })
        _listRoutes()
    })

}

module.exports = { start, app }