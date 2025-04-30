// Typeof Limitation With Array

// Reasoning Behind typeof for Arrays
// - In JavaScript, arrays are a special kind of object. They share some characteristics with regular objects but are designed specifically to hold ordered collections of items. While they have their own methods and functionalities,  the `typeof` operator treats them broadly as objects.

// Thinking of Arrays as Specialized Objects
// - Imagine a regular object is like a box where you can store different things with unique labels (keys) to access them. An array is like a special box with numbered compartments. You can still store various data types (numbers, strings, etc.) within the compartments, but you access them using their position (index) in the order they were added.

// Alternative for Checking Arrays
// - Since `typeof` doesn't distinguish arrays perfectly,  JavaScript provides a more specific way to check if a value is an array: `Array.isArray(value)`. This method will return `true` if the value is indeed an array and `false` otherwise.

// Example
let myArray = [1, 2, 3];

console.log(typeof myArray); // Output: "object" (typeof limitation)
console.log(Array.isArray(myArray)); // Output: true (correct identification)

// Note
// - While `typeof array` might return `"object"`, it's important to understand that arrays are a specialized type of object in JavaScript. For precise array identification, use the `Array.isArray(value)` method.

