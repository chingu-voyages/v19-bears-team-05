const reducer = require("../reducer");
const initialState = require("../initialState");

describe("operations in reducer working correctly", () => {
  const mockReducer = reducer.reducer;
  const mockInitialState = initialState.initialState;
  const mockItem1 = {
    about: "officia fugiat esse officia commodo",
    byVendor: { _id: "5ec0180b61361e716d8bf4a1", name: "GYNKO" },
    inStock: true,
    name: "Vegan Special Roll",
    tags: ["veget"],
    unitPrice: 2120,
    __v: 0,
    _id: "5ec0180b61361e716d8bf4a2",
  };
  const mockItem2 = {
    about: "amet Lorem id elit anim",
    byVendor: { _id: "5ec0180b61361e716d8bf4a1", name: "GYNKO" },
    inStock: true,
    name: "Smoked Salmon & Cream Cheese Bagel",
    tags: (2)[("sweet", "veget")],
    unitPrice: 570,
    __v: 0,
    _id: "5ec0180b61361e716d8bf4a6",
  };
  const basketWithItems = [
    {
      __v: 0,
      _id: "5ec0180b61361e716d8bf4a2",
      about: "officia fugiat esse officia commodo",
      byVendor: {
        _id: "5ec0180b61361e716d8bf4a1",
        name: "GYNKO",
      },
      inStock: true,
      name: "Vegan Special Roll",
      quantity: 2,
      tags: ["veget"],
      unitPrice: 2120,
    },
    {
      __v: 0,
      _id: "5ec0180b61361e716d8bf4a6",
      about: "amet Lorem id elit anim",
      byVendor: {
        _id: "5ec0180b61361e716d8bf4a1",
        name: "GYNKO",
      },
      inStock: true,
      name: "Smoked Salmon & Cream Cheese Bagel",
      quantity: 1,
      tags: undefined,
      unitPrice: 570,
    },
  ];

  test("sets the tags to state", () => {
    const tags = ["test1", "test2"];
    const updated = mockReducer(
      { ...mockInitialState },
      { type: "set_tags", tags }
    );
    expect(updated.tags).toEqual(["test1", "test2"]);
    const newTags = ["test3"];
    const overridden = mockReducer(updated, {
      type: "set_tags",
      tags: newTags,
    });
    expect(overridden.tags).toEqual(["test3"]);
  });

  test("sets the search term to state", () => {
    let updated = mockReducer(
      { ...mockInitialState },
      {
        type: "set_search",
        search: "abc",
      }
    );
    expect(updated.search).toEqual("abc");
  });

  test("adds item to basket", () => {
    let updated = mockReducer(
      { ...mockInitialState },
      { type: "add_item_to_basket", item: mockItem1 }
    );
    expect(updated.basketItems).toEqual([
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a2",
        about: "officia fugiat esse officia commodo",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Vegan Special Roll",
        quantity: 1,
        tags: ["veget"],
        unitPrice: 2120,
      },
    ]);
    updated = mockReducer(updated, {
      type: "add_item_to_basket",
      item: mockItem1,
    });
    expect(updated.basketItems).toEqual([
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a2",
        about: "officia fugiat esse officia commodo",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Vegan Special Roll",
        quantity: 2,
        tags: ["veget"],
        unitPrice: 2120,
      },
    ]);
    updated = mockReducer(updated, {
      type: "add_item_to_basket",
      item: mockItem2,
    });
    expect(updated.basketItems).toEqual([
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a2",
        about: "officia fugiat esse officia commodo",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Vegan Special Roll",
        quantity: 2,
        tags: ["veget"],
        unitPrice: 2120,
      },
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a6",
        about: "amet Lorem id elit anim",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Smoked Salmon & Cream Cheese Bagel",
        quantity: 1,
        tags: undefined,
        unitPrice: 570,
      },
    ]);
  });

  test("removes single item from basket", () => {
    let updated = mockReducer(
      { ...initialState, basketItems: basketWithItems },
      { type: "remove_single_item_from_basket", item: mockItem1 }
    );
    let newBasket = [
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a2",
        about: "officia fugiat esse officia commodo",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Vegan Special Roll",
        quantity: 1,
        tags: ["veget"],
        unitPrice: 2120,
      },
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a6",
        about: "amet Lorem id elit anim",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Smoked Salmon & Cream Cheese Bagel",
        quantity: 1,
        tags: undefined,
        unitPrice: 570,
      },
    ];
    expect(updated.basketItems).toEqual(newBasket);
    updated = mockReducer(
      { basketItems: newBasket },
      { type: "remove_single_item_from_basket", item: mockItem1 }
    );
    newBasket = [
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a6",
        about: "amet Lorem id elit anim",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Smoked Salmon & Cream Cheese Bagel",
        quantity: 1,
        tags: undefined,
        unitPrice: 570,
      },
    ];
    expect(updated.basketItems).toEqual(newBasket);
    updated = mockReducer(
      { basketItems: newBasket },
      { type: "remove_single_item_from_basket", item: mockItem2 }
    );
    expect(updated.basketItems).toEqual([]);
  });

  test("removes lines of items", () => {
    let updated = mockReducer(
      { ...initialState, basketItems: basketWithItems },
      { type: "remove_line_from_basket", item: mockItem1 }
    );
    expect(updated.basketItems).toEqual([
      {
        __v: 0,
        _id: "5ec0180b61361e716d8bf4a6",
        about: "amet Lorem id elit anim",
        byVendor: {
          _id: "5ec0180b61361e716d8bf4a1",
          name: "GYNKO",
        },
        inStock: true,
        name: "Smoked Salmon & Cream Cheese Bagel",
        quantity: 1,
        tags: undefined,
        unitPrice: 570,
      },
    ]);
    updated = mockReducer(updated, {
      type: "remove_line_from_basket",
      item: mockItem2,
    });
    expect(updated.basketItems).toEqual([]);
  });

  test("sets delivery date", () => {
    let updated = mockReducer(
      { ...initialState },
      { type: "set_delivery_date", date: new Date(2020, 4, 4, 7, 30) }
    );
    expect(updated.deliveryDate.toISOString()).toEqual(
      "2020-05-04T06:30:00.000Z"
    );
  });

  test("conditionally prefills form", () => {
    let updated = mockReducer(
      { ...mockInitialState },
      {
        type: "prefill_form",
        user: { token: "abc123", patron: { name: "test patron" } },
      }
    );
    // todo : include test to deep check object for key and value
    // expect(updated).toBe(expect.objectContaining({ name: "test patron" }));
    // updated = mockReducer(updated, {
    //   type: "prefill_form",
    //   user: { token: "xyz", patron: { name: "test patron2" } },
    // });
    // expect(updated).objectContaining({ name: "test patron" });
  });
});

// set_delivery_date
// update_form_state
// prefill_form
// set_order_id
