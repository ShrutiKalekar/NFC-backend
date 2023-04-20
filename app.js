const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
// const pcsc = require('nfc-pcsc');
const dbo = require("./db/mongo");
const linkRoute = require("./Routes/links");

mongoose.set('strictQuery', false);

app.use(cors());

PORT = process.env.PORT || 2160 ;

app.use("/link", linkRoute);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

let uri =
  process.env.DATABASE ;
mongoose.connect(uri, (err) => {
  if (!err) {
    console.log("Connection to database successful!");
  }
});

app.listen(PORT, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server listening on ${PORT}`);
});