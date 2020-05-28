const mongoose = require("mongoose");

const Tag = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 30,
  },
});
module.exports = mongoose.model("Tag", Tag);
