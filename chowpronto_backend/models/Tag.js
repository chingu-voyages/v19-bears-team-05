const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 30,
  },
});
module.exports = mongoose.model("Tag", Tag);
