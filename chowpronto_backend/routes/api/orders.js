const express = require("express");
const router = express.Router();
const orderControllers = require("../../controllers/order-controller");
const { verifyToken } = require("../../middleware/verifyToken");
const {
  checkPatronBodyId,
  checkPatronParamsId,
} = require("../../middleware/checkPatron");

// @route    POST api/orders/order
// @desc    Save order route
// @access   Pivate

// @route   GET api/orders/:orderId
// @desc    get order by order id route
// @access   Pivate

// @route   GET api/orders/patron/:patronId
// @desc    get all order for a patron
// @access   Pivate

/*
Please include headers in these requests

 headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      }
*/

router.post(
  "/order",
  verifyToken,
  checkPatronBodyId,
  orderControllers.createOrder
);
router.get("/:orderId", verifyToken, orderControllers.getOrderById);
router.get(
  "/patron/:patronId",
  verifyToken,
  checkPatronParamsId,
  orderControllers.getPatronsOrders
);

module.exports = router;
