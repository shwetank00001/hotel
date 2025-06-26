const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
require('./db/connect');

const suppA = require('./routes/supplierARoute') 

app.get("/", (req, res) => {
  res.send("WElcome this");
});

app.use('/supplierA', suppA)

app.post('/api/search-hotels', (req, res)=> {
  const {cityName, checkInDate, checkOutDate} = req.body()
})

app.listen(
  3000,() => {
    console.log("App at 5000");
  }
);

