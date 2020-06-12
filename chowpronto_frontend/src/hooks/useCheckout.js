import { useContext } from "react";
import useAuth from "./useAuth";
import { MenuContext } from "../state/MenuContext";
import useError from "./useError";

export default function useCheckout() {
  const { getUser, register } = useAuth();
  const { state, dispatch } = useContext(MenuContext);
  const user = getUser();
  const errorMsg = useError();
  function checkout() {
    if (!user.token) {
      register(state.formState)
        .then(() => {
          return saveOrder();
        })
        .catch((err) => {
          err.json().then((json) => {
            console.log("json.errorMsg", json.errorMsg);
            errorMsg.push(json.errorMsg);
          });
        });
    } else {
      saveOrder().catch((err) => {
        err.json().then((json) => {
          console.log(json.errorMsg);
        });
      });
    }
  }
  function saveOrder() {
    const {
      name,
      phone,
      address,
      postcode,
      deliveryDate,
      email,
    } = state.formState;
    return fetch("/api/orders/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: state.basketItems,
        deliveryDetails: {
          name,
          phone,
          address,
          postcode,
          deliveryDate,
          email,
        },
        patronId: user.patron._id,
      }),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((order) => {
        dispatch({ type: "set_order_id", orderId: order.orderId });
      });
  }
  return { checkout };
}
