import { useReducer, useContext } from "react";
import MenuContext from "../state/MenuContext";

function useBasket() {
  function reducer(state, action) {
    switch (action.type) {
      case "add_item":
        return {
          ...state,
          basketItems: [...state.basketItems, action.item],
        };
      case "remove_item":
        // takes itemId as action
        return state.filter((val) => val.id !== action.itemId);
      case "set_delivery_time":
        let newDeliveryDate = state.deliveryDate.setHours(
          action.time.getHours()
        );
        break;
      default:
        return state;
    }
  }
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}

class BasketItem {
  constructor(quantity, itemId, name, unitCost) {
    this.quantity = quantity;
    this.itemId = itemId;
    this.name = name;
    this.unitCost = unitCost;
  }
}

export default useBasket;
