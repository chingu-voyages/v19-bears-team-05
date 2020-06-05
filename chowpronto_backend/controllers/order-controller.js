const Order = require("../models/Order");

/*
const dataFromClientSide = {
  cart: [
    { menuItemId: "5ec0180b61361e716d8bf4a2", quantity: 5 },
    { menuItemId: "5ec0180b61361e716d8bf4ba", quantity: 2 },
    { menuItemId: "5ec0180b61361e716d8bf4cf", quantity: 3 },
  ],
  "deliveryDetails": 	{
    "email" : "kosenchiha@gmail.com",
    "name" : "hjkhkg",
    "phone": "24255222244",
    "address": "1/2 flat, 20 Hope Street, Glasqow, UK",
    "postcode" : "hjkhkg"
	},
"patronId": "5ed0f412cd1c6b40fabc0fa2"
};
*/

const createOrder = async (req, res) => {
  const { cart, deliveryDetails, patronId } = req.body;

  if (!cart || cart.length === 0) {
    return res.status(400).send({ errorMsg: "Your cart is empty" });
  }
  if (
    !deliveryDetails ||
    !deliveryDetails.name ||
    !deliveryDetails.email ||
    !deliveryDetails.phone ||
    !deliveryDetails.address ||
    !deliveryDetails.postcode
  ) {
    return res
      .status(400)
      .send({ errorMsg: "Please, provide all delivery details" });
  }

  try {
    const newOrder = Order({ deliveryDetails, patronId });
    cart.forEach((menuItem) => newOrder.cart.push(menuItem));
    newOrder.save();
    res.send({ orderId: newOrder._id });
  } catch (err) {
    res.status(500).send({ errorMsg: "something went wrong on server side" });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.find({ _id: orderId }).populate({
      path: "cart.menuItemId",
      model: "MenuItem",
      select: ["name", "unitPrice"],
      populate: { path: "byVendor", model: "Vendor", select: "name" },
    });
    res.json(order);
  } catch (err) {
    res.status(500).send({ errorMsg: "No order with this Id" });
  }
};

exports.createOrder = createOrder;
exports.getOrderById = getOrderById;
