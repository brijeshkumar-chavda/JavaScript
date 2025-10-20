// Topic: Spread Operator

// Q. What is spread operator?
// -> The Spread Operator (...) is a syntax introduced in ECMAScript 2015 (ES6) that allows an iterable (such as an array, string, or map) or an object to be expanded (or "spread") into its individual components.
// -> It essentially "unpacks" the contents of a data structure.

// Q. Why do we need spread operator?
// -> The Spread Operator makes code much cleaner and more readable by providing a declarative way to perform common operations that previously required manual loops or less expressive methods.
// -> It is primarily used to:
// -> Avoid Mutation: Create a new copy of an array or object without changing the original (crucial in frameworks like React for state management).
// -> Simplify Array/Object Merging: Easily combine multiple data structures into a single new one.
// -> Pass Arguments: Pass the elements of an array as individual arguments to a function.

// Q. How to use spread operator?
// -> Copying: "When used inside a new array literal ([]) or object literal ({}), it creates a shallow copy of the original data structure."
// -> Combining: "When used multiple times inside a new literal, it merges the contents of the structures."
// -> Function Call: "When used in a function call, it passes each element of the iterable as a separate argument to the function."

// Note:
// -> The Spread Operator creates a shallow copy. If the array or object contains nested objects or arrays, those nested structures are still referencing the same objects in memory. Modifying a nested object in the copy will still affect the original

// Syntax:
//  ...iterable (for arrays, strings, maps)
//  ...object (for objects)

// Example:

// Array merging
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Object merging
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Spreading into Function arguments
function sum(x, y, z) {
  return x + y + z;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
