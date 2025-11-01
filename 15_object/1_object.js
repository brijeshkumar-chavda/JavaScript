// Object

// What
// - An object is a collection of key-value pairs. It's like a mini-container that stores data in a structured way.
// - Imagine an object as a box with labeled compartments. Each compartment (key) holds a specific piece of information (value).

// Why
// - We use objects to organize related data. It makes code more readable, maintainable, and easier to work with complex information.
// - Instead of having many separate variables for different pieces of information, you can group them together under a meaningful name (object).

// How
// - Objects are created using curly braces {}.
// - Inside the curly braces, you define key-value pairs separated by commas.
// - Keys are used to identify and access specific values within the object. Keys can be strings or symbols (unique identifiers).
// - Values can be any data type, including numbers, strings, booleans, other objects, or even arrays.

// Syntax
const myObject = {
  key1: value1,
  key2: value2,
  // ... more key-value pairs
};

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "coding", "music"],
};

// Note
// - It is common practice to declare objects with const.
// - You can access values within an object using dot notation (.) or bracket notation ([]).
// - Dot notation is preferred when keys are valid JavaScript identifiers (without spaces or special characters).
// - Bracket notation is useful for accessing keys that are dynamically generated or contain spaces/special characters.

// Creating object using object literal {}
const myObject1 = {
  string: "Hello, World!",
  number: 123,
  boolean: true,
  array: [1, 2, 3, 4, 5],
  object: {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  function1: function () {
    console.log("Hello, World!");
  },
};

// Creating empty object add key : value
const myObject2 = {};
myObject2.key1 = "value1";
myObject2.key2 = "value2";
myObject2.key3 = "value3";

// Creating object using constructor (Not Recommended)
const myObject3 = new Object();
myObject3.key1 = "value1";
myObject3.key2 = "value2";
myObject3.key3 = "value3";
