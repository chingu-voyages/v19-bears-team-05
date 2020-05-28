const now = new Date();

const nowPlus30 = now.setMinutes(now.getMinutes() + 30);

export const initialState = {
  tags: [],
  search: "",
  basketItems: [],
  deliveryDate: nowPlus30,
};
