const mongoose = require("mongoose");

const MenuItem = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
  byVendor: { type: mongoose.Schema.ObjectId, ref: "Vendor" },
});

module.exports = mongoose.model("MenuItem", MenuItem);
