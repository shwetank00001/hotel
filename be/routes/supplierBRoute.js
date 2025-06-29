const express = require('express');
const route = express.Router();

const {  getData, createSupplierB} = require('../controllers/supplierBController')


route.get('/hotels', getData);
route.post('/hotels', createSupplierB);

module.exports = route