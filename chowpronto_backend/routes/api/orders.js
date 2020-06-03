const express = require("express");
const router = express.Router();
const orderControllers = require("../../controllers/order-controller");
const { verifyToken } = require("../../middleware/verifyToken");
const { checkPatron } = require("../../middleware/checkPatron");

// @route    POST api/orders/order
// @desc    Save order route
// @access   Pivate

// @route   GET api/orders/:orderId
// @desc    get order by order route
// @access   Pivate

/*
Please include headers in these requests

 headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      }
*/

router.post("/order", verifyToken, checkPatron, orderControllers.createOrder);
router.get("/:orderId", verifyToken, orderControllers.getOrderById);

module.exports = router;
