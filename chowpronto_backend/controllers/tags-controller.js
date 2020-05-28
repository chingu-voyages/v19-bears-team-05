const Tag = require("../models/Tag");

const getTags = async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.send(tags);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getTags = getTags;
