const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("WElcome this");
});

app.listen(
  3000,
  () => {
    console.log("App at local host");
  },
  3000
);
