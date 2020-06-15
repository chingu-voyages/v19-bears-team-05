const reducer = require("../reducer");
const initialState = require("../initialState");

describe("operations in reducer working correctly", () => {
  const mockReducer = reducer.reducer;
  const mockInitialState = initialState.initialState;

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
    let mockItem = {
      about: "officia fugiat esse officia commodo",
      byVendor: { _id: "5ec0180b61361e716d8bf4a1", name: "GYNKO" },
      inStock: true,
      name: "Vegan Special Roll",
      tags: ["veget"],
      unitPrice: 2120,
      __v: 0,
      _id: "5ec0180b61361e716d8bf4a2",
    };
    let updated = mockReducer(
      { ...mockInitialState },
      { type: "add_item_to_basket", item: mockItem }
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
      item: mockItem,
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
    let mockItem2 = {
      about: "amet Lorem id elit anim",
      byVendor: { _id: "5ec0180b61361e716d8bf4a1", name: "GYNKO" },
      inStock: true,
      name: "Smoked Salmon & Cream Cheese Bagel",
      tags: (2)[("sweet", "veget")],
      unitPrice: 570,
      __v: 0,
      _id: "5ec0180b61361e716d8bf4a6",
    };
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

  test("removes single item from basket", () => {});
});

// set_tags
// set_search
// add_item_to_basket
// remove_single_item_from_basket
// remove_line_from_basket
// set_delivery_date
// update_form_state
// prefill_form
// set_order_id
