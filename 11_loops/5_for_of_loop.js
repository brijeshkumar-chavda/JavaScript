// Topic: For of Loop

// Q. What is for...of loop?
// -> for...of is a loop specifically designed to iterate over iterable objects in JavaScript.
// -> Iterable objects are those that can provide a sequence of values, such as arrays, strings, maps, sets, and some custom objects.

// Q. Why is for...of loop used?
// -> It offers a concise and readable way to iterate over the values of an iterable object, often used in modern JavaScript code.
// -> Compared to traditional for loops (with indices), it focuses on the values themselves, potentially improving code clarity.

// Q. How does for...of loop work?
// -> It works by creating an iterator for the iterable object.
// -> An iterator is an object that provides a next() method, which returns the next element in the sequence along with a done property indicating whether the iteration is complete.
// -> The loop automatically iterates until there are no more values left (the done property becomes true).

// Note:
// -> The order of iteration is guaranteed.
// -> Not recommended to use on object.
// -> The for...of loop doesn't modify the original iterable object. It iterates over a copy of the values.

// Syntax:
// for (const element of iterable_object) {
//   // Code to be executed for each element
// }

// Example:

// For of loop on string
const variable = "I am string";
for (const character of variable) {
  console.log(character);
}

// For of loop on array
const array = [0, 1, 2, 3, 4, 5];

for (const element of array) {
  console.log(element);
}

// For of loop on Map()
const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

// for of -> Map -> key
for (const key of map1) {
  console.log(key);
}
// for of -> Map -> [key, value] -> key | value
for (const [key, value] of map1) {
  console.log(key);
  console.log(value);
}

// For of loop on object (NOT RECOMMENDED)
// Object.keys(objectName) -> key -> objectName[key] -> value
const object = {
  key1: "value1",
  key2: "value2",
};
for (const key of Object.keys(object)) {
  console.log(object[key]);
}
