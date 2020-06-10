import React, { useContext } from "react";
import useAuth from "./useAuth";
import { MenuContext } from "../state/MenuContext";

export default function useCheckout() {
  const { getUser, register } = useAuth();
  const { state } = useContext(MenuContext);
  const user = getUser();
  function checkout() {
    if (!user.token) {
      register(state.formState)
        .then((data) => {
          /// save token to local storage
          /// save user data somewhere

          // const { token, patron } = data;
          // const { _id, email, name, phone, address, postcode } = patron;
          // const deliveryDetails = {
          //   email,
          //   name,
          //   phone,
          //   address,
          //   postcode,
          // };

          return saveOrder();
        })
        .catch((err) => {
          err.json().then((json) => {
            console.log(json.errorMsg);
          });
        });
    } else {
      try {
        saveOrder(user.patron._id);
      } catch (err) {
        alert(err);
        console.log("errSaveOrder", err);
      }
    }
  }
  function saveOrder() {
    return fetch("/api/orders/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: state.basketItems,
        deliveryDetails: state.deliveryDate,
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
      .then((order) => console.log("returned from createOrder", order));
  }
  return { checkout };
}
