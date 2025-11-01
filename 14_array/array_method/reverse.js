// reverse()

// What
// - The reverse() method in JavaScript is used to reverse the order of elements in an array.

// Why
// - The reverse() method is useful when you need to manipulate or process an array by reversing its order.
// - It is commonly used in various programming scenarios, such as sorting data in descending order, reversing a sequence of elements, or creating user-friendly interfaces.

// How
// - The reverse() method modifies the original array in-place and does not create a new array.
// - It reverses the order of elements in the array by swapping the first element with the last element, the second element with the second-to-last element, and so on.

// Syntax
// array.reverse()

// Example
// Reversing an array of numbers
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Reversing an array of strings
const fruits = ["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits); // Output: ["orange", "banana", "apple"]

// Reversing an array of objects
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];
people.reverse();
console.log(people);
// Output: [
//   { name: "Bob", age: 35 },
//   { name: "Jane", age: 30 },
//   { name: "John", age: 25 },
// ]

// Note
// - The reverse() method modifies the original array in-place. If you need to preserve the original order of elements, you should create a copy of the array before calling the reverse() method.
// - The reverse() method does not return a new array. Instead, it modifies the existing array.