const express = require('express');
const route = express.Router();


const {  getData, createSupplierA} = require('../controllers/supplierAController');


route.get('/hotels', getData);
route.post('/hotels', createSupplierA);



module.exports = route