const mongoose = require("mongoose");

const Vendor = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  logoURL: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  menu: [{ type: mongoose.Schema.ObjectId, ref: "MenuItem" }],
});

module.exports = mongoose.model("Vendor", Vendor);
