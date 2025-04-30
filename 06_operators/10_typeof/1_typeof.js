// typeof

// What
// - The typeof operator in JavaScript is used to determine the data type of a value.

// Why
// - Understanding Code Behavior: Knowing the data type of a variable is crucial for writing predictable and correct code. typeof helps you ensure that variables are being used as intended and that operations are compatible with their data types.
// - Error Handling: You can use typeof in conditional statements to check for unexpected data types and handle errors gracefully. For example, a function might expect a number as input, and you can use typeof to check before performing calculations.
// - Debugging: typeof can be a valuable tool during debugging to inspect the data types of variables and identify potential issues

// Syntax
// const myVariable = "value";
// console.log(typeof myVariable);

// Example
// Numbers
let myNumber = 123;
console.log(typeof myNumber); // Output: "number"

// Strings
let myString = "Alice";
console.log(typeof myString); // Output: "string"

// Booleans
let myBoolean = true;
console.log(typeof myBoolean); // Output: "boolean"

// Arrays
let myArray = [0, 1, 2, 3, 4, 5];
console.log(typeof myArray); // Output: "object" (limitation of typeof)
console.log(Array.isArray(myArray)); // Output: true (correct identification)

// Objects
const myObject = {
  key1: "value1",
  key2: "value2",
};
console.log(typeof myObject); // Output: "object"

// Null
let myNull = null;
console.log(typeof myNull); // Output: "object" (limitation of typeof)

// Undefined
let myUndefined;
console.log(typeof myUndefined); // Output: "undefined"

// Symbol
let mySymbol = Symbol("unique");
console.log(typeof mySymbol); // Output: "symbol"

// Note
// - typeof is not perfect. It has it's limitation. You can see them in examples.
