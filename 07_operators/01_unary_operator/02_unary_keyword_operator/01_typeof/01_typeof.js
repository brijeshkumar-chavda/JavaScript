// Topic: typeof

// Q. What is typeof operator?
// -> The typeof operator in JavaScript is used to determine the data type of a value.

// Q. Why is typeof operator needed?
// -> Understanding Code Behavior: Knowing the data type of a variable is crucial for writing predictable and correct code. typeof helps you ensure that variables are being used as intended and that operations are compatible with their data types.
// -> Error Handling: You can use typeof in conditional statements to check for unexpected data types and handle errors gracefully. For example, a function might expect a number as input, and you can use typeof to check before performing calculations.
// -> Debugging: typeof can be a valuable tool during debugging to inspect the data types of variables and identify potential issues

// Syntax:
// const variable = "value";
// console.log(typeof variable);

// Example:

// Numbers
let number = 123;
console.log(typeof number); // Output: "number"

// Strings
let string = "Alice";
console.log(typeof string); // Output: "string"

// Booleans
let boolean = true;
console.log(typeof boolean); // Output: "boolean"

// Arrays
let array = [0, 1, 2, 3, 4, 5];
console.log(typeof array); // Output: "object" (limitation of typeof)
console.log(Array.isArray(array)); // Output: true (correct identification)

// Objects
const object = {
  key1: "value1",
  key2: "value2",
};
console.log(typeof object); // Output: "object"

// Null
let myNull = null;
console.log(typeof myNull); // Output: "object" (limitation of typeof)

// Undefined
let myUndefined;
console.log(typeof myUndefined); // Output: "undefined"

// Symbol
let mySymbol = Symbol("unique");
console.log(typeof mySymbol); // Output: "symbol"
