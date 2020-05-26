const mongoose = require("mongoose");

const Patron = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  secondName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },

  // orders: { type: mongoose.Schema.ObjectId, ref: "Order" },
});

module.exports = mongoose.model("Patron", Patron);
