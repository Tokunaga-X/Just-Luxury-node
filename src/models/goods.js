const mongoose = require("mongoose");

const Goods = new mongoose.Schema({
  name: {
    type: String,
    default: "This should be a name"
  },
  price: {
    type: String,
    default: "This should be a price"
  },
  pic: {
    type: String,
    default: "This should be a url to the picture"
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Goods", Goods);
