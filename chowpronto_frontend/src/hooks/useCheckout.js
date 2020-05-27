import React from "react";
import { useHistory } from "react-router-dom";

export default function useCheckout() {
  const history = useHistory();
  function checkout(basket) {
    let serverData = basket.map((val) => ({
      _id: val._id,
      quantity: val.quantity,
    }));
    fetch("/api/orders/guest", {
      method: "POST",
      body: JSON.stringify(serverData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          history.push({
            pathname: "/confirmOrder",
            state: { basket, orderId: data._id },
          });
        } else {
          throw new Error("Error creating order");
        }
      })
      .catch((err) => console.log("err", err));
  }
  return checkout;
}
