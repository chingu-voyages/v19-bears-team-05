export function reducer(state, action) {
  switch (action.type) {
    case "set_tags":
      return { ...state, tags: action.tags };
    case "set_search":
      return { ...state, search: action.search };
    case "add_item_to_basket":
      const foundIndex = state.basketItems.findIndex(
        (val) => val._id === action.item._id
      );
      let newBasketItemList =
        foundIndex < 0
          ? [...state.basketItems, { quantity: 1, ...action.item }]
          : state.basketItems.map((val, ind) =>
              ind === foundIndex ? { ...val, quantity: val.quantity + 1 } : val
            );
      return {
        ...state,
        basketItems: newBasketItemList,
      };
    case "change_delivery_time":
      return { ...state, deliveryDate: action.date };
    case "change_delivery_date":
      let currentSelected = new Date(state.deliveryDate);
      currentSelected.setDate(action.date.getDate());
      currentSelected.setMonth(action.date.getMonth());
      return { ...state, deliveryDate: currentSelected };
    default:
      throw new Error();
  }
}
