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
    case "update_form_state":
      return {
        ...state,
        formState: { ...state.formState, [action.field]: action.value },
      };
    case "set_user":
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case "prefill_form":
      return {
        ...state,
        formState:
          state.userDetails.token && state.formState.email.length === 0
            ? state.userDetails.patron
            : state.formState,
      };
    default:
      throw new Error();
  }
}
