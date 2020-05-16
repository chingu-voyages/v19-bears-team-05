const MenuItem = require("../models/MenuItem");

const getMenuItems = async (req, res) => {
  try {
    let allMenuItems = await MenuItem.find({ inStock: true }).populate(
      "byVendor",
      "name"
    );
    res.send(allMenuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
exports.getMenuItems = getMenuItems;
