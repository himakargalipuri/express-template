const mongoose = require('mongoose');

//schema
const dataSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
}, {
        timestamps: {
            createdAt: 'created_on',
            updatedAt: 'updated_on'
        }
    });

const dataModel  = mongoose.model('Data', dataSchema);

module.exports = {
    getAll: (query,callback,limit) => {
        dataModel.find(query,callback).limit(limit);
    },
    add: (data,callback) => {
        dataModel.create(data,callback);
    },
    getById: (id, callback) => {
        dataModel.findById(id,callback);
    },
    update: (query, update, options, callback) => {
        dataModel.findOneAndUpdate(query, update, options, callback);
    },
    remove: (query, callback) => {
        dataModel.remove(query, callback);
    },
    count: (query,callback) => {
        dataModel.count(query,callback);
    }
}