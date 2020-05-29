const mongoose = require("mongoose");

const Patron = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  phone: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  // orders: { type: mongoose.Schema.ObjectId, ref: "Order" },
});

module.exports = mongoose.model("Patron", Patron);
