// Topic: Call back function

// Q. What is callback function?
// -> A callback function is a function that is passed as an argument to another function. The main function can then call the callback function at a specific time, allowing you to control the sequence of actions in your code.

// Q. Why use callback function?
// -> Callbacks are essential in JavaScript because they are the primary mechanism for asynchronous operations and event handling, allowing JavaScript to be non-blocking.
// -> Asynchronicity: They tell a function what to do after a long operation (like fetching data, timing out, or waiting for a file to load) is complete, preventing the program from freezing.
// -> Customization: They allow a general-purpose function (like map, filter, or an event listener) to execute custom instructions defined by the developer on a specific set of data or event.

// Q. How to use callback function?
// The process involves two steps:
// -> Definition: The developer defines the function to be executed later (the callback) and passes it to the higher-order function.
// -> Invocation: The higher-order function executes its main logic, and when it is ready, it explicitly calls the callback function, usually passing in any relevant data (like an array element, or an error/result).

// Note:
// -> The function that receives the callback is called the Higher-Order Function.

// Syntax:
// Passing regular function as callback:
function higherOrderFunction(callback) {
  // Do something...
  console.log("I am higher order function");

  callback();
}

function callbackFunction() {
  // Do something after the higher-order function completes its task
  console.log("I am callback function");
}

higherOrderFunction(callbackFunction);

// Passing Arrow Function as callback:
// -> The callback is passed in where any other argument would go, often as an anonymous Arrow Function for conciseness.
higherOrderFunction(() => "I am callback arrow function");

// Example:
// 1. Higher-Order Function: setTimeout
// 2. Callback Function: The arrow function () => { ... }

console.log("Start");

setTimeout(() => {
  // This function is the callback. It runs *after* the 2000ms delay.
  console.log("Executed later.");
}, 2000);

console.log("End");
// Output: Start, End, ... (2 seconds later) Executed later.

// Note
// -> Callbacks are fundamental in JavaScript, especially for asynchronous tasks. However, using too many nested callbacks can lead to complex and hard-to-read code. To handle asynchronous operations more elegantly, consider using Promises or Async/Await, which provide a more structured way to work with asynchronous code.
