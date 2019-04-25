var mongoose = require('mongoose');
// Build the connection string 
const dbURI = require('./config').dburl;

const connect = () => {
    console.log('Database connecting....')
    return mongoose.connect(dbURI, {useNewUrlParser: true})
}

module.exports = { connect }