// Topic: Parameter Destructuring

// Q. What is parameter destructuring?
// -> Parameter destructuring in JavaScript is a way to extract values from an object or an array and assign them to variables in a more concise and convenient manner. It allows you to "destructure" the data structure and directly access its individual values without manually accessing them using dot notation or indexing.

// Q. Why use parameter destructing?
// -> Parameter destructuring simplifies the process of extracting values from objects and arrays, making your code more concise and readable. It eliminates the need for explicit assignments and reduces the amount of code required to access individual values.

// Syntax:
// 1. Object Destructuring
// -> When a function has an object as a parameter, you can use parameter destructuring to extract specific values from the object.

// Without destructuring
const object = { key1: "value1", key2: "value2" };

function function1(object) {
  const key1 = object.key1;
  const key2 = object.key2;

  console.log(key1);
  console.log(key2);
}

// With destructuring
function function1({ key1, key2 }) {
  console.log(key1);
  console.log(key2);
}

// 2. Array Destructuring

// Without destructuring
const array = [1, 2, 3, 4, 5];

function function2(array) {
  const variable1 = array[0];
  const variable2 = array[1];

  console.log(variable1);
  console.log(variable2);
}

// With destructuring
function function2([variable1, variable2]) {
  console.log(variable1);
  console.log(variable2);
}
