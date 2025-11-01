// Topic: Array

// Q. What is Array?
// -> It is the collection of elements (values/ items).

// Note:
// -> It the common practice to create array with `const`.

// Positive point of Array:
// -> Array can store different type of value.
// -> Array size is dynamic in nature.

// Negative point of Array:
// -> Array can store duplicate values.

// Type of order in Array:
// -> Index-Based Order: Arrays are fundamentally ordered lists. Elements are stored and accessed based on their numerical index (starting from 0).
// -> Insertion Order: When you add elements to an array (either via literal syntax, .push(), or by assigning to an index), they maintain the order in which they were inserted.
// -> Iteration Order: When you iterate over an Array (using a for loop, for...of, .forEach(), or the spread syntax ...), the elements are always visited in ascending index order.

// Syntax:
// const arrayName = [element1, element2, element3];

// Default way creating array.
const myArray1 = [1, 2, 3];

// Creating array using the Array constructor.
const myArray2 = new Array(1, 2, 3);
console.log(myArray2);
