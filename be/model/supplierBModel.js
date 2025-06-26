const mongoose = require('mongoose')

const supplierBModel = new mongoose.Schema({
    cityName:String,
    checkIn:{
        type:Date,
        default:new Date()
    },
    checkOut:{
        type:Date,
        default:new Date()
    },
})

module.exports = mongoose.model("SupplierB", supplierBModel)