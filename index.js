const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Connect to MongoDB
const db = require("./src/config/keys").MongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connecting...");
  })
  .catch(err => {
    console.log(err);
  });

// Middleware
app.use(bodyParser.json());
app.use(cors());

const car = require("./src/routes/api/car");
const shop = require("./src/routes/api/shop");

app.use("/api/car", car);
app.use("/api/goods", shop);

// Bodyparser
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server running on port ${port}`));
