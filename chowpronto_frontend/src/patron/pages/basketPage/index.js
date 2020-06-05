import React, { useContext } from "react";
import { MenuContext } from "../../../state/MenuContext";
import { Link, useHistory } from "react-router-dom";
import formatEuro from "../../../helpers/parseMoney";

const BasketPage = (props) => {
  const { state, dispatch } = useContext(MenuContext);
  console.log("state", state);
  return (
    <div>
      <h1>Shopping Basket</h1>
      <ul>
        {state.basketItems.map((val) => (
          <li key={val._id}>
            {val.name} x {val.quantity} @ {formatEuro(val.unitPrice)} ={" "}
            {formatEuro(val.unitPrice * val.quantity)}
            <button
              onClick={() =>
                dispatch({ type: "add_item_to_basket", item: val })
              }
            >
              add 1
            </button>
            <button
              onClick={() => {
                dispatch({ type: "remove_single_item_from_basket", item: val });
              }}
            >
              remove 1
            </button>
            <button
              onClick={() => {
                dispatch({ type: "remove_line_from_basket", item: val });
              }}
            >
              remove all
            </button>
          </li>
        ))}
      </ul>
      <Link to="/menu">Back</Link>
    </div>
  );
};

export default BasketPage;
