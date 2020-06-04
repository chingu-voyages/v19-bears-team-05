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

/*
patron's credentials
{
  "email" : "test@gmail.com",
  "name": "Test Patron",
  "password" : "12345678",
  "phone": "+12-3457-8910",
  "address": "123 Flat, 12 Hope Street, Faith City, Wanderland",
  "postcode" : "W 765 HS",
  "role": "REGISTER"
}

patron's id
"_id": "5ed76f4bd8b7fb359eeaead3"

id in token must be equal patron's id

Metod GET
 url = http://localhost:5000/api/orders/patron/5ed76f4bd8b7fb359eeaead3
 will return 
 [
    {
        "orderId": "5ed77116391a4a3c4d9c4480",
        "total": 19260,
        "date": "2020-06-03T09:44:54.564Z"
    },
    {
        "orderId": "5ed77125391a4a3c4d9c4482",
        "total": 24660,
        "date": "2020-06-03T09:45:09.136Z"
    },
    {
        "orderId": "5ed7712e391a4a3c4d9c4485",
        "total": 35260,
        "date": "2020-06-03T09:45:18.382Z"
    }
]
*/

const getPatronsOrders = async (req, res) => {
  try {
    const { patronData } = req;
    const { patronId } = req.params;

    if (patronData._id !== patronId) {
      return res.status(403).send({ errorMsg: "Unauthorized" });
    }

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
