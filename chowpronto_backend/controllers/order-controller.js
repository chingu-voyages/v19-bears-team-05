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
  console.log("save order was hit");
  const { cart, deliveryDetails, patronId } = req.body;
  if (!cart || cart.length === 0) {
    console.log("first error");
    return res.status(400).send("Your cart is empty");
  }
  if (
    !deliveryDetails ||
    !deliveryDetails.name ||
    !deliveryDetails.email ||
    !deliveryDetails.phone ||
    !deliveryDetails.address ||
    !deliveryDetails.postcode
  ) {
    console.log("second error");
    return res.status(400).send("Please, provide all delivery details");
  }
  if (!patronId) {
    console.log("third error");
    return res.status(400).send("Something went wrong");
  }

  try {
    console.log("in try block");
    const newOrder = Order({ deliveryDetails, patronId });
    cart.forEach((menuItem) => newOrder.cart.push(menuItem));
    newOrder.save();
    res.send({ orderId: newOrder._id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("something went wrong on server side");
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
    console.error(err.message);
    res.status(500).send("No order with this Id");
  }
};

exports.createOrder = createOrder;
exports.getOrderById = getOrderById;
