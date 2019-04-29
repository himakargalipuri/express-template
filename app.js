const server = require('./server')
const db = require('./db')
const config = require('./config')

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception at : ' + err.toString())
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: ', reason);
});
/**
* Connects to Database first.
* Can add multiple Database connections to the chain
* Once Database connected, server will be started
*/
db.connect()
  .then(() => { server.start() })
  .catch((e) => { throw new Error(e); process.exit(1) })