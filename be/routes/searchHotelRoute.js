const express = require('express');
const route = express.Router();

const { searchHotels} = require('../controllers/searchHotelController');

route.get('/', searchHotels)


module.exports =route