import { useReducer } from "react";

function useBasketItems() {
  const basketItems = [
    { quantity: 1, itemId: 1981919191, name: "Burger", unitCost: 950 },
    { quantity: 2, itemId: 7575757575, name: "Pizza", unitCost: 1125 },
  ];

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
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, basketItems);
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

export default useBasketItems;
