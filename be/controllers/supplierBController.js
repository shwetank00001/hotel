const SupplierB = require('../model/supplierbModel');

async function getData(req, res) {
  try {
    const showSuppB = await SupplierB.find();
    res.status(200).send(showSuppB);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function createSupplierB(req, res) {
  try {
    const createdSuppB = await SupplierB.create(req.body);
    console.log(req.body)
    res.status(200).send(createdSuppB);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = {
  getData,
  createSupplierB
};
