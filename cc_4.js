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
let customerCarts = [
  [products[0], products[2]],
  [products[1], products[3]],
  [products[4], products[2]]
];

for (let i = 0; i < customerCarts.length; i++) {
  let cartTotal = 0;

  for (let item of customerCarts[i]) {
    let finalItemPrice = item.discountedPrice * (1 - extraDiscount);

    cartTotal += finalItemPrice;

    if (item.inventory > 0) {
      item.inventory--;
    }
  }

  console.log(`Customer ${i + 1} Total Cost: $${cartTotal.toFixed(2)}`);
}
console.log("Single Product Details:");

for (let key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

console.log("Updated Product Inventory:");

for (let product of products) {
  for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }

  console.log("----------------------");
}
