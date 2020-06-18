const Order = require("../models/Order");
const { validateDeliveryData } = require("./validation");

const createOrder = async (req, res) => {
  const { cart, deliveryDetails, patronId } = req.body;
  console.log(cart);

  if (!cart || cart.length === 0) {
    return res.status(400).send({ errorMsg: "Your cart is empty" });
  }

  if (!cart.every((menuItem) => menuItem.quantity > 0 && menuItem._id)) {
    return res
      .status(400)
      .send({ errorMsg: "Something wrong with items in your basket" });
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

  const errorMessages = validateDeliveryData(
    deliveryDetails.name,
    deliveryDetails.email,
    deliveryDetails.phone,
    deliveryDetails.address,
    deliveryDetails.postcode
  );
  if (errorMessages.length !== 0) {
    return res.status(400).send({ errorMsg: errorMessages });
  }

  try {
    const newOrder = Order({ deliveryDetails, patronId });
    cart.forEach((menuItem) =>
      newOrder.cart.push({
        quantity: menuItem.quantity,
        menuItemId: menuItem._id,
      })
    );
    await newOrder.save();
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

const getPatronsOrders = async (req, res) => {
  try {
    const { patronId } = req.params;

    await Order.find({ patronId }, { cart: 1, date: 1, paid: 1 })
      .populate({
        path: "cart.menuItemId",
        model: "MenuItem",
        select: ["unitPrice"],
      })
      .exec((err, orders) => {
        if (err) {
          return res
            .status(500)
            .send({ errorMsg: "Can't find orders for given patron id" });
        }
        const patronOrders = orders.map((order) => {
          const total = order.cart.reduce(
            (sum, menuItem) =>
              menuItem.quantity * menuItem.menuItemId.unitPrice + sum,
            0
          );
          return {
            orderId: order._id,
            total,
            date: order.date,
          };
        });
        res.json(patronOrders);
      });
  } catch (err) {
    console.error(err);
    res.status(500).send({ errorMsg: "Server error" });
  }
};

exports.createOrder = createOrder;
exports.getOrderById = getOrderById;
exports.getPatronsOrders = getPatronsOrders;
