// Topic: IIFE (Immediately Invoked Function Expression)

// Q. What is IIFE?
// -> IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined.

// Q. Why use IIFE?
// -> IIFE is used to create a new scope and avoid polluting the global namespace.
// -> It helps in encapsulating variables and functions, preventing them from being accessed from outside the IIFE.
// -> IIFE is often used in module patterns to create private variables and methods.

// Syntax:
// (function functionName(){}) ();

// Example:

// Regular function
(function function1(parameter) {
  return console.log(parameter);
})("I'm Regular IIFE Function");

// Arrow function
((parameter) => {
  console.log(parameter);
})("I'm Arrow IIFE Function");
