// Object

// What
// - Object is a data type in JavaScript that represents a complex data structure, such as arrays, functions, and custom objects.

// Why
// - Objects help organize and structure data in a more flexible and efficient manner.
// - They provide a way to encapsulate related properties and methods into a single entity.
// - Objects enable the creation of reusable code and modular programming.

// How
// - Objects are key-value pairs, where keys are unique identifiers and values can be of any data type.
// - Objects can be created using object literals, constructor functions, or object-oriented programming techniques.

// Syntax
// Object literal syntax
const object = {
  key1: value1,
  key2: value2,
};

// Constructor function syntax
function ConstructorFunction() {
  this.key1 = value1;
  this.key2 = value2;
}

const object1 = new ConstructorFunction();

// Example
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
person.greet(); // Output: Hello, my name is John

// Note
// - Objects are mutable, meaning their properties and methods can be changed after they are created.
// - Even if you declare them with const you can still able to make change.

