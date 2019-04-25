var mongoose = require('mongoose');
// Build the connection string 
const dbURI = require('./config').dburl;

mongoose.connect(dbURI, {useNewUrlParser: true});



module.exports = mongoose;

const connect = () => {
    console.log('Database connecting....')
    return mongoose.connect(dbURI, {useNewUrlParser: true})
}

module.exports = { connect }