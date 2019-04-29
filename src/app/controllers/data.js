const dataModel = require('../models/data')
import _return from require('../../utils/res')

module.exports = {
    getAllData: (req, res, next) => {
        dataModel.add((err, cb) => {
            _return(200, cb, err)
        });
    },
    getDataById: (req, res) => {

    },
    UpdateDataById: (req, res) => {

    },
    DeleteDataById: (req, res) => {

    },
    CreateData: (req, res) => {

    },
    countData: (req, res, next) => {
        dataModel.count({}, (err, cb) => {
            _return(200, cb, err)
        });
    }
}

