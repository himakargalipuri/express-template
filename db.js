var mongoose = require('mongoose');
// Build the connection string 
const dbURI = require('./config').dburl;

const connect = () => {
    console.log('Database connecting....')
    return new Promise((Resolve, Reject) => {
        mongoose.connect(dbURI, {useNewUrlParser: true})
            .then(() => { console.log('Database Connected successfully..'); Resolve() })
            .catch((e) => { Reject(e) })
    })
    
}

module.exports = { connect }