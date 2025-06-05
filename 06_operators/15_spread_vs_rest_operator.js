// Spread VS Rest Operator

// What
// - Spread Operator: Used to expand iterable objects (like arrays or strings) into individual elements within function calls, array literals, or object literals.
// - Rest Operator: Used to collect remaining arguments into an array within a function parameter list.

// Why
// - Spread Operator:
//      - Simplifies function calls with arrays: avoids the need for explicit apply or loop-based approaches to pass array elements as individual arguments.
//      - Creates copies of arrays (shallow copy) or concatenates arrays easily.
//      - Expands object properties into key-value pairs within object literals.
// - Rest Operator:
//      - Captures a variable number of arguments passed to a function and handles them as an array within the function body.

// Examples

// 1. Function Call with Array Elements (avoiding apply or loop)
function sumNumbers(x, y) {
  return x + y;
}

let numbers = [5, 3];
console.log(sumNumbers(...numbers)); // Output: 8 (spreads numbers array as individual arguments)

// 2. Array Concatenation (shallow copy)
let fruits1 = ["apple", "banana"];
let fruits2 = ["orange", "mango"];

let allFruits = [...fruits1, ...fruits2];
console.log(allFruits); // Output: ["apple", "banana", "orange", "mango"]

// 3. Object Property Spread (limited - copies own enumerable properties)
let person = { name: "Alice", age: 30 };
let userDetails = { ...person, city: "New York" };

console.log(userDetails); // Output: { name: "Alice", age: 30, city: "New York" }

// Rest Operator Example:

function multiply(multiplier, ...numbers) {
  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
}

let result = multiply(2, 4, 5); // Pass any number of arguments
console.log(result); // Output: 40 (multiplies 2 by 4 and 5)
