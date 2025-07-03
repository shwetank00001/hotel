const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

require('./db/connect');

const suppA = require('./routes/supplierARoute');
const suppB = require('./routes/supplierBRoute');
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const searchHotels = require('./routes/searchHotelRoute')

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get("/", (req, res) => {
  res.send("WElcome this");
});

app.use('/supplierA', suppA);
app.use('/supplierB', suppB);
app.use('/api/search-hotels', searchHotels)

// app.post('/api/search-hotels', (req, res)=> {
//   const {cityName, checkInDate, checkOutDate} = req.body;
// })

app.listen(
  5000,() => {
    console.log("App at 5000");
  }
);

