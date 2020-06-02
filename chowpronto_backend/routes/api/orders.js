const express = require("express");
const router = express.Router();
const orderControllers = require("../../controllers/order-controller");

// @route    GET api/menuitems
// @desc     Menu Items route
// @access   Public

router.post("/order", orderControllers.createOrder);
router.get("/:orderId", orderControllers.getOrderById);

//router.get("/:menuItemId", menuItemsControllers.getMenuItemById);

module.exports = router;
