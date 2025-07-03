const axios = require('axios');

async function getHotelFromSupplierA(input) {
  try {
    const res = await axios.post('http://localhost:5000/supplierA/hotels', input, { timeout: 5000 });
    return res.data;
  } catch (err) {
    return null;
  }
}

async function getHotelFromSupplierB(input) {
  try {
    const res = await axios.post('http://localhost:5000/supplierB/hotels', input, { timeout: 5000 });
    return res.data;
  } catch (err) {
    return null;
  }
}

module.exports = {
  getHotelFromSupplierA,
  getHotelFromSupplierB,
};
