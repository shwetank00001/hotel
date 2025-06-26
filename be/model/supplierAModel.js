const mongoose = require('mongoose')

const supplierAModel = new mongoose.Schema({
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

module.exports = mongoose.model("SupplierA", supplierAModel)