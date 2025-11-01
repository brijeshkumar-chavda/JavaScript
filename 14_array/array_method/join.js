// join()

// What
// - The join() method in JavaScript is used to concatenate all elements of an array into a single string, separated by a specified delimiter.

// Why
// - The join() method is useful when you need to convert an array of elements into a formatted string for display, storage, or transmission.

// How
// - The join() method takes an optional delimiter as an argument and returns a new string.
// - If no delimiter is provided, the elements of the array are concatenated without any separation.
// - If a delimiter is provided, the elements of the array are concatenated with the delimiter between each pair of elements.

// Syntax
// array.join("delimiter");

// Example
// Joining an array of strings into a single string
const fruits = ["apple", "banana", "orange"];
const fruitString = fruits.join(", ");
console.log(fruitString); // Output: "apple, banana, orange"

// Joining an array of numbers into a single string
const numbers = [1, 2, 3, 4, 5];
const numberString = numbers.join("-");
console.log(numberString); // Output: "1-2-3-4-5"

// Joining an array of objects into a single string
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
];
const personString = people
  .map((person) => `${person.name} (${person.age})`)
  .join("; ");
console.log(personString); // Output: "John (25); Jane (30); Bob (35)"
