const Order = require("../models/Order");

/*
const dataFromClientSide = {
  cart: [
    { menuItemId: "5ec0180b61361e716d8bf4a2", quantity: 5 },
    { menuItemId: "5ec0180b61361e716d8bf4ba", quantity: 2 },
    { menuItemId: "5ec0180b61361e716d8bf4cf", quantity: 3 },
  ],
  deliveryDetails: {
    email: "patron_chow_pronto@gmail.com",
    firstName: "Love",
    secondName: "Eating",
    phone: "24255222244",
    address: "1/2 flat, 20 Hope Street, Glasqow, UK",
  },
};
*/

const createOrder = async (req, res) => {
  const { cart, deliveryDetails } = req.body;
  if (!cart || cart.length === 0) {
    return res.status(400).send("Your cart is empty");
  }
  if (
    !deliveryDetails ||
    !deliveryDetails.phone ||
    !deliveryDetails.email ||
    !deliveryDetails.firstName ||
    !deliveryDetails.secondName
  ) {
    return res.status(400).send("Please, provide delivery details");
  }

  try {
    const newOrder = Order({ deliveryDetails });
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
