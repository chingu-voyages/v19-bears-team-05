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
    case "remove_single_item_from_basket":
      const reducedBasket = state.basketItems.reduce(
        (acc, val) =>
          val._id !== action.item._id
            ? [...acc, val]
            : val.quantity > 1
            ? [...acc, { ...val, quantity: val.quantity - 1 }]
            : acc,
        []
      );
      return {
        ...state,
        basketItems: reducedBasket,
      };
    case "remove_line_from_basket":
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (val) => val._id !== action.item._id
        ),
      };
    case "set_delivery_date":
      return { ...state, deliveryDate: action.date };
    case "update_form_state":
      return {
        ...state,
        formState: { ...state.formState, [action.field]: action.value },
      };
    case "set_user":
      return {
        ...state,
        userDetails: { ...action.userDetails },
      };
    case "prefill_form":
      return {
        ...state,
        formState:
          action.user.token &&
          state.formState.email.length === 0 &&
          action.user.patron
            ? action.user.patron
            : state.formState,
      };
    case "set_order_id":
      return {
        ...state,
        orderId: action.orderId,
      };
    default:
      throw new Error();
  }
}
