const now = new Date();

now.setMinutes(Math.ceil(now.getMinutes() / 10) * 10 + 30);
now.setSeconds(0);

export const initialState = {
  tags: [],
  search: "",
  basketItems: [],
  deliveryDate: now,
  formState: {
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
  userDetails: {
    name: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
  },
};
