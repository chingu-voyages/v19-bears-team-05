function useMenuItems(location) {
  // takes an object with filters as key value pairs
  let filteredFoods = dummyItems;
}

class MenuItem {
  constructor(name, description, price, vendor) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100000000);
    this.description = description;
    this.price = price;
    this.vendor = vendor;
  }
}

const dummyItems = [
  new MenuItem("Burger", "Delicious Burger on Bun", 750, "Bobs Burger Shack"),
  new MenuItem(
    "Pizza",
    "Fresh tomato & Buffalo Mozzeralla on a Hand-Stretched base",
    1150,
    "Italia Fresca"
  ),
  new MenuItem("Burger", "Delicious Burger on Bun", 750, "Bobs Burger Shack"),
  new MenuItem(
    "Pizza",
    "Fresh tomato & Buffalo Mozzeralla on a Hand-Stretched base",
    1150,
    "Italia Fresca"
  ),
  new MenuItem("Burger", "Delicious Burger on Bun", 750, "Bobs Burger Shack"),
  new MenuItem(
    "Pizza",
    "Fresh tomato & Buffalo Mozzeralla on a Hand-Stretched base",
    1150,
    "Italia Fresca"
  ),
  new MenuItem("Burger", "Delicious Burger on Bun", 750, "Bobs Burger Shack"),
  new MenuItem(
    "Pizza",
    "Fresh tomato & Buffalo Mozzeralla on a Hand-Stretched base",
    1150,
    "Italia Fresca"
  ),
];

export default useMenuItems;
