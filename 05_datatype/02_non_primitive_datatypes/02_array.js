// Array

// What
// - Array is a data type in JavaScript that represents a collection of elements, also known as a list or a sequence.

// Why
// - Arrays provide a convenient way to store and organize multiple values in a single variable.
// - They allow for efficient access, manipulation, and iteration over the elements.
// - Arrays enable the creation of dynamic and flexible data structures.

// How
// - Arrays are ordered collections of elements, where each element has a unique index.
// - The index starts from 0 and can be used to access and modify elements in the array.
// - Arrays can contain elements of any data type, including other arrays, objects, and functions.

// Syntax
// Array literal syntax
const array = [element1, element2, element3];

// Array constructor syntax
const array1 = new Array(element1, element2, element3);

// Example
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

numbers[3] = 10;
console.log(numbers); // Output: [1, 2, 3, 10, 5]

console.log(numbers.length); // Output: 5

// Note
// - Arrays are mutable, meaning their elements can be changed after they are created.
// - Arrays can be dynamically resized, allowing you to add or remove elements.