const mongoose = require("mongoose");

const Items = new mongoose.Schema({
  name: {
    type: String,
    default: "This should be a name"
  },
  price: {
    type: String,
    default: "This should be a price"
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Items", Items);
