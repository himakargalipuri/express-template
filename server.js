const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const listEndpoints = require('express-list-endpoints')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
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