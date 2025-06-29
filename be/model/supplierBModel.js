const mongoose = require('mongoose')

const supplierBModel = new mongoose.Schema({
    hotelId: {
        type: Number,
        default: () => new Date().getTime()
    },
    name:String,
    price: Number       
})

module.exports = mongoose.model("SupplierB", supplierBModel)