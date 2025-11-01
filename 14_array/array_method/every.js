// every()

// What
// - It take call back function as parameter.
// - It checks condition for every single element in array. If the condition satisfy for every element then it will return true. If not then it will return false.

// Syntax
const array = [1, 4, 6, 8, 10];
const answer = array.every((element) => element % 2 === 0);
console.log(answer);

// Example
// Find out every item in cart is less than 30000.
const cart = [
  {
    id: 1,
    name: "Phone",
    price: 12000,
  },
  {
    id: 2,
    name: "Tablet",
    price: 15000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 29000,
  },
];

const ans = cart.every((item) => item.price < 30000);
console.log(ans);
