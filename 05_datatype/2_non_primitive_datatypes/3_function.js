// Topic

// Resource
// What
// - Function is a reusable block of code that performs a specific task or calculates a value.

// Why
// - Functions help break down a program into smaller, more manageable pieces.
// - They allow for code reuse, reducing redundancy and improving code readability.
// - Functions enable modular programming, making it easier to maintain and debug code.

// How
// - Functions are defined using the function keyword, followed by the function name and a set of parentheses.
// - Inside the function, you can write code to perform the desired task or calculate a value.
// - Functions can accept parameters, which are values passed into the function when it is called.
// - Functions can return a value using the return statement.

// Syntax
// Function Declaration
function functionName(parameter1, parameter2) {
  return console.log("I am Function Declaration");
}

// Function Expression
const functionName = function (parameter1, parameter2) {
  return console.log("I am Function Expression");
};

// Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5

// Note
// - Functions in JavaScript are first-class objects, meaning they can be assigned to variables, passed as arguments to other functions, and returned as values from functions.