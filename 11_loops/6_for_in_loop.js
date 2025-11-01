// `for in` Loop

// What
// - for...in is a loop specifically designed to iterate over the enumerable properties of an object in JavaScript.
// - It provides a way to access all properties (including inherited ones) of an object, regardless of their type (strings, numbers, functions, etc.).
// - It is use to iterate over the object property.

// Why
// - It can be useful for generic object property iteration, especially when you need to access property names and values for various purposes.
// - It can simplify looping through object properties without requiring manual property access by name.

// How
// - It works by cycling through the enumerable properties of an object, one by one.
// - The loop body executes for each property, providing you with the property name (prop) in each iteration.
// - You can then access the property value using the property name: object[key].

// Note
// - The order of iteration is not guaranteed.
// - Not recommended to use on array.

// Syntax
// for (key in object){
//   Code...
// }

// For in loop on object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

for (let key in object) {
  console.log(key);
  console.log(object[key]);
}

// For in loop on array (NOT RECOMMENDED)
const array = [1, 2, 3, 4, 5];
for (const index in array) {
  console.log(index);
  console.log(array[index]);
}
