console.log("Running Store Discount Engine Started");
let products = [
  {
    name: "Running Shoes",
    category: "apparel",
    price: 89.99,
    inventory: 12
  },
  {
    name: "Fitness Watch",
    category: "electronics",
    price: 199.99,
    inventory: 8
  },
  {
    name: "Sports Drink",
    category: "groceries",
    price: 2.99,
    inventory: 50
  },
  {
    name: "Laundry Detergent",
    category: "household",
    price: 14.99,
    inventory: 20
  },
  {
    name: "Hydration Vest",
    category: "apparel",
    price: 59.99,
    inventory: 15
  }
];
for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.discountRate = 0.20;
      break;

    case "apparel":
      product.discountRate = 0.15;
      break;

    case "groceries":
    case "household":
      product.discountRate = 0.10;
      break;

    default:
      product.discountRate = 0;
  }

  product.discountedPrice = product.price * (1 - product.discountRate);
}
let customerType = "student";
let extraDiscount = 0;

if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
} else {
  extraDiscount = 0;
}
