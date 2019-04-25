const ip = require('ip')
const server = require('./server')
const db = require('./db')
const config = require('./config')

process.on('uncaughtException', (err) => {
  console.log('UncaughtException : ' + err.toString())
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: ', reason.toString());
});

db.connect()
  .then(() => { console.log('Database Connected successfully..'); server.start() })
  .then(() => {
    
      console.log(' ')
      console.log('Server started : ')
      console.log('     http://localhost:' + config.port)
      console.log('     http://' + ip.address() + ':' + config.port)
      console.log(' ')
    
  })
  .catch((e) => { throw new Error(e.message); process.exit(1) })