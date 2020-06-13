import { useContext } from "react";
import useAuth from "./useAuth";
import { MenuContext } from "../state/MenuContext";
import useError from "./useError";
import saveOrder from "../api/saveOrder";

export default function useCheckout() {
  const { getUser, register } = useAuth();
  const { state, dispatch } = useContext(MenuContext);
  const user = getUser();
  const errorMsg = useError();
  function checkout() {
    if (!user.token) {
      register(state.formState)
        .then((registeredUser) => {
          return saveOrder(
            registeredUser.token,
            registeredUser.patron._id,
            state.formState,
            state.basketItems
          );
        })
        .then((order) => {
          dispatch({ type: "set_order_id", orderId: order.orderId });
        })
        .catch((err) => {
          err.json().then((json) => {
            errorMsg.push(json.errorMsg || json.message);
          });
        });
    } else {
      return saveOrder(
        user.token,
        user.patron._id,
        state.formState,
        state.basketItems
      )
        .then((order) => {
          dispatch({ type: "set_order_id", orderId: order.orderId });
        })
        .catch((err) => {
          err.json().then((json) => {
            errorMsg.push(json.errorMsg || json.message);
          });
        });
    }
  }
  return { checkout };
}
