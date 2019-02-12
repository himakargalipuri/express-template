const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const connect = () => {
    return new Promise((Resolve, Reject) => {
        MongoClient.connect(config.dburl, { useNewUrlParser: true }, function(err, client) {
            if(err) {
                Reject('Database could not be connected : ', err)
            } else {
                
                client.close();
                Resolve()
            }
            
          });
    })
    
}

module.exports = {connect}