const server = require('./server')
const db = require('./db')


process.on('uncaughtException', (err) =>{
    console.log('UncaughtException : ' + err)
})

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: ', p);
  });

db.connect().then(() => console.log("Connected successfully to Database"), server.start())
    .then((port) => console.log('Server started on port : '+port))
    .catch((e) => console.log(e.message), process.exit(1))