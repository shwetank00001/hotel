const SupplierA = require('../model/supplierAModel');

async function getData(req, res) {
  try {
    const showSuppA = await SupplierA.find();
    res.status(200).send(showSuppA);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function createSupplierA(req, res) {
  try {
    const createdSuppA = await SupplierA.create(req.body);
    res.status(200).send(createdSuppA);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = {
  getData,
  createSupplierA
};
