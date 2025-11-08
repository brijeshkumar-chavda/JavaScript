// Asynchronous

// What
// - "I will finish later."
// - In programming, asynchronous refers to the ability of code to execute independently of the main program flow. In other words, asynchronous operations allow certain tasks to start, run, and complete separately from the rest of the code, without blocking or pausing the execution of the program.

// setTimeout();

// What
// - It is inbuilt JavaScript function which use for executing code after the time limit is finished.

// Note
// - delay parameter use millisecond (ms).
// - 1000ms = 1sec

// Syntax
// setTimeout(function, delay);

setTimeout(function1, 3000);

function function1() {
  console.log("Hello, World");
}

// setInterval();

// What
// - setInterval is a built-in function in JavaScript that repeatedly executes a specified function or code snippet at a fixed time interval. It allows you to schedule the execution of a function repeatedly, with a specified delay between each execution.

// Syntax
// setInterval(function, delay);

function function1() {
  console.log("Hello");
}

// After 5 seconds, stop the execution
const intervalId = setInterval(function1, 1000);
setTimeout(function () {
  clearInterval(intervalId);
}, 5000);
