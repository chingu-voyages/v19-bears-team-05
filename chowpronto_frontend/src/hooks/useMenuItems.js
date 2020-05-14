function useMenuItems(location) {
  // takes a location argument (TBC) & returns a function getItems
  return [
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
}

class MenuItem {
  constructor(name, description, price, vendor) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.vendor = vendor;
  }
}

export default useMenuItems;
