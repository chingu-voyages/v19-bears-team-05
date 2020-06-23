const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  paid: {
    type: Boolean,
    default: false,
  },

  cart: [
    {
      menuItemId: {
        type: mongoose.Schema.ObjectId,
        ref: "MenuItem",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],

  patronId: { type: mongoose.Schema.ObjectId, ref: "Patron" },

  deliveryDetails: {
    name: {
      type: String,
      required: true,
      min: 6,
      max: 255,
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
  },
});

module.exports = mongoose.model("Order", Order);
