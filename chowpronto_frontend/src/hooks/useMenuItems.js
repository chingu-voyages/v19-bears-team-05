function useMenuItems(fiterObject = {}) {
  // takes an object with filters as key value pairs
  let items = dummyItems;
  return items;
}

class MenuItem {
  constructor(name, about, unitPrice, vendor, vendorId) {
    this.name = name;
    this.inStock = true;
    this.id = Math.floor(Math.random() * 100000000);
    this.about = about;
    this.unitPrice = unitPrice;
    this.vendor = vendor;
    this.vendorId = vendorId;
  }
}

const dummyItems = [
  new MenuItem(
    "Burger",
    "Delicious Burger on Bun",
    750,
    "Bobs Burger Shack",
    7838747592
  ),
  new MenuItem(
    "Magerita Pizza",
    "Fresh tomato & Buffalo Mozzeralla on a Hand-Stretched base",
    1150,
    "Italia Fresca",
    7487575923
  ),
  new MenuItem(
    "Chicken",
    "Fried Chicken with Fries",
    850,
    "Bobs Burger Shack",
    7838747592
  ),
  new MenuItem(
    "Hotdog",
    "12in Frankfurter in a bun",
    700,
    "Bobs Burger Shack",
    7838747592
  ),
  new MenuItem(
    "CheeseBurger",
    "Delicious Burger on Bun with Cheese",
    775,
    "Bobs Burger Shack",
    7838747592
  ),
  new MenuItem(
    "Vegeteriana Pizza",
    "Tomato & Buffalo Mozzeralla with Peppers, Mushrooms & Artichoke on a Hand-Stretched base",
    1350,
    "Italia Fresca",
    7487575923
  ),
  new MenuItem(
    "Fish Sticks",
    "Breaded Cod Fingers, served with Fries",
    800,
    "Bobs Burger Shack",
    7838747592
  ),
  new MenuItem(
    "Garlic Bread",
    "Pizza bread with fresh Basil & Garlic butter",
    450,
    "Italia Fresca",
    7487575923
  ),
];

export default useMenuItems;
