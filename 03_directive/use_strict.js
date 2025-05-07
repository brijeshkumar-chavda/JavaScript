// Directive

// What
// - It's a directive in JavaScript that activates strict mode, a stricter set of rules for interpreting and executing JavaScript code.

// Why
// - It's used to catch common coding errors, enforce better coding practices, and enhance security by disallowing potentially unsafe features and behaviors.

// How
// - To activate strict mode, you include the string literal "use strict"; at the beginning of a script or a function. This directive tells the JavaScript engine to interpret the code that follows it in strict mode.

// Syntax
"use strict";

// Example
// Strict mode example
function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2")); // This will throw a TypeError in strict mode

// Note
// - The use strict directive should be placed at the beginning of a script or function to enable strict mode for that scope.
// - Strict mode can help catch common coding errors and enforce best practices, making your code more reliable and secure.

// When
// - Use it to catch common coding errors and enforce best practices.
// - Use it when working on large projects or collaborating with others to ensure consistent code quality.
// - Use it when you want to write modern JavaScript code that leverages new features and best practices