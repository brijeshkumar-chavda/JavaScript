// Topic: Object

// Note:
// - Objects are mutable, meaning their properties and methods can be changed after they are created.
// - Even if you declare them with const you can still able to make change.

// Syntax:

// Object literal syntax
const object = {
  key1: "value1",
  key2: "value2",
};

// Constructor function syntax
function ConstructorFunction() {
  this.key1 = "value1";
  this.key2 = "value2";
}

const object1 = new ConstructorFunction();

// Example:
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
