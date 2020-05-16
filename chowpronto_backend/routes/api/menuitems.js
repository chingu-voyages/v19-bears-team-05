const express = require("express");
const router = express.Router();
const menuItemsControllers = require("../../controllers/menuitems-controller");

// @route    GET api/menuitems
// @desc     Menu Items route
// @access   Public

router.get("/", menuItemsControllers.getMenuItems);

module.exports = router;
