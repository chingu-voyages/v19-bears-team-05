import { useReducer } from "react";

function useBasket() {
  let current = new Date();
  const initialState = {
    id: Math.floor(Math.random() * 100000000),
    basketItems: [],
    deliveryDate: current.setMinutes(current.getMinutes + 30),
  };

  function reducer(state, action) {
    switch (action.type) {
      case "add_item":
        return [
          ...state,
          new BasketItem(
            action.quantity,
            action.itemId,
            action.name,
            action.unitCost
          ),
        ];
      case "remove_item":
        return state.filter((val) => val.id !== action.itemId);
      case "set_delivery_time":
        let newDeliveryDate = state.deliveryDate.setHours(
          action.time.getHours()
        );
      default:
        return state;
    }
  }
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
