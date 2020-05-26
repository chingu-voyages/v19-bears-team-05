const MenuItem = require("../models/MenuItem");

const getMenuItems = async (req, res) => {
  try {
    const searchParam = req.query.search
      .toLowerCase()
      .split(" ")
      .filter((v) => v !== "");
    const queryParams = req.query.tags.split(" ").filter((v) => v !== "");

    let allMenuItems = await MenuItem.find({ inStock: true }).populate(
      "byVendor",
      "name"
    );

    if (queryParams.length > 0) {
      allMenuItems = allMenuItems.filter((menuItem) =>
        queryParams.every((param) => menuItem.tags.includes(param))
      );
    }

    if (searchParam.length > 0) {
      allMenuItems = allMenuItems.filter((menuItem) =>
        searchParam.every((param) =>
          menuItem.name.toLowerCase().includes(param)
        )
      );
    }
    res.send(allMenuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const menuItem = await MenuItem.findOne({ _id: menuItemId }).populate(
      "byVendor",
      "name"
    );
    res.json(menuItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("No menu item with this Id");
  }
};

exports.getMenuItems = getMenuItems;
exports.getMenuItemById = getMenuItemById;
