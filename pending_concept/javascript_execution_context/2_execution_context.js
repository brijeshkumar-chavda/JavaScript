// Execution Context

// Type of Execution Context
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// Pre - Knowledge
// Video: https://youtu.be/_JMXlGt3OSo?si=4L9Eptdi-Fdwb7fJ

// - In other programming languages when you write a code in top to bottom order.
// - Because of this type of order. You need to declare a function first after that you can call the function and execute it.
// - But in javascript you can call and execute function on top of declaration.

greet();

function greet() {
  console.log("Hello!");
}

// - The reason you can perform this because JavaScript has global context.

// Video: https://youtu.be/ByhtOgF6uYM?si=x2TpqUTarEyKCBOA

// 1. Global Execution Context

// What
// - The Global Execution Context (GEC) is the default execution environment for JavaScript code. It's created when a script starts running and represents the global scope.

// Why
// - The GEC provides a foundation for executing code and managing variables and functions that are accessible from anywhere in the script.

// How
// - When you run the JavaScript code. The GCE will automatically created.
// - This GCE will be refer to `this` keyword.

// Why this keyword is refer to the window object? What is the connection?
// - The this keyword in JavaScript is a dynamic reference that points to the object that is currently executing the code. In a browser environment, the global execution context is represented by the window object. Therefore, when you're not within a specific object's method or function, the this keyword refers to the window object.
