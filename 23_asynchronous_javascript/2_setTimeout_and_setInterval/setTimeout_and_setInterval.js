// Asynchronous

// What is Asynchronous?
// - "I will finish later."
// - In programming, asynchronous refers to the ability of code to execute independently of the main program flow. In other words, asynchronous operations allow certain tasks to start, run, and complete separately from the rest of the code, without blocking or pausing the execution of the program.

// setTimeout();

// What is setTimeout?
// - It is inbuilt JavaScript function which use for executing code after the time limit is finished.

// NOTE
// - delay parameter use millisecond (ms).
// - 1000ms = 1sec

// SYNTAX
// setTimeout(function, delay);

setTimeout(myFunction, 3000); // You can also pass the function directly into the setTimeout();

function myFunction() {
  console.log("Hello, World");
}

// setInterval();

// Q. What is setInterval?
// - setInterval is a built-in function in JavaScript that repeatedly executes a specified function or code snippet at a fixed time interval. It allows you to schedule the execution of a function repeatedly, with a specified delay between each execution.

// SYNTAX
// setInterval(function, delay);

function myFunction() {
  console.log("Hello");
}

// setInterval(fun, 1000);

// After 5 seconds, stop the execution
const intervalId = setInterval(myFunction, 1000);
setTimeout(function () {
  clearInterval(intervalId);
}, 5000);
