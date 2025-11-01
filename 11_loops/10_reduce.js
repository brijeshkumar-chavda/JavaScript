// `.reduce()`

// What
// .reduce() is a powerful method in JavaScript that iterates through an array and accumulates a single value based on a provided function. It's a core concept in functional programming.

// Why
// Simplify complex calculations: Reduce helps condense a series of calculations on an array into a single, more readable expression.
// Aggregate data: It's useful for tasks like finding the sum, average, product, or any other custom aggregation of elements in an array.
// Data transformation: You can combine elements or transform them into a single value or object.

// How
// Iteration: Reduce iterates over each element in the array.
// Accumulator: It starts with an initial value (optional) or the first element as an accumulator.
// Callback Function: You provide a callback function that takes two arguments:
// Accumulator: The current accumulated value.
// Current Element: The element being processed in the current iteration.
// Accumulation: Inside the callback, you define how the current element is combined with the accumulator to create a new accumulated value.
// Return Value: Reduce returns the final accumulated value after iterating through all elements.

// Syntax
// array.reduce(function (accumulator, currentValue, currentIndex, array) {
//   Combine accumulator and currentValue
//   return newValue;
// }, initialValue);

// Parameters
// function: The callback function that defines the accumulation logic.
// initialValue (optional): The starting value for the accumulator (defaults to the first element if not provided).

// Example
const array = [1, 2, 3];

// Using normal function
const sum = array.reduce(function (accumulator, currentValue) {
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // Initial value of 0 for sum

// Using Arrow function
// const sum = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// ); // Initial value of 0 for sum

console.log(sum); // Output: 15

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const cartTotalPrice = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);

console.log(cartTotalPrice);
