// Some Method

// Q.What is some method?
// - It will take call back function as parameter.
// - It checks all the element in the array if one single element meet the condition it will return true. If not it will return false.

// SYNTAX
const array = [2, 3, 4, 5, 6];
const answer = array.some((element) => element % 2 === 0);
console.log(answer);

// EXAMPLE: Find out which item in cart is less than 2000.
const cart = [
  {
    id: 1,
    name: "Phone",
    price: 1000,
  },
  {
    id: 2,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 3,
    name: "Laptop",
    price: 6000,
  },
];
const answer1 = cart.some((item) => item.price < 2000);
console.log(answer1);
