import React from "react";
import { useHistory } from "react-router-dom";

export default function useCheckout() {
  const history = useHistory();
  function checkout(basket) {
    history.push({
      pathname: "/confirmOrder",
      state: { my: "State" },
    });
  }
  return checkout;
}
