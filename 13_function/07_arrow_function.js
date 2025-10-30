// Topic: Arrow Function

// Q. What is Arrow Function?
// -> An Arrow Function (introduced in ES6) is a concise, alternative syntax for writing a JavaScript function expression. It gets its name from the "fat arrow" symbol (=>) used in its definition.
// -> They are typically used for short, anonymous functions (like callbacks) but have important differences from traditional functions regarding the binding of this.

// Q. Why use Arrow Function?
// Arrow functions were created to solve two primary problems:
// -> Conciseness: To make callback functions (like those used with map, filter, or Promises) much shorter and cleaner to read.
// -> this Binding: To fix the confusing way the this keyword works in traditional nested functions by using lexical this scoping.

// Q. How to use Arrow Function?
// -> The core mechanism is syntactical sugar that removes the need for the function and often the return keywords, and the surrounding curly braces ({}).
// -> Concise Body: If the function body is a single expression, the curly braces ({}) and the return keyword can be omitted. The result of the expression is returned implicitly.
// -> Lexical this: An arrow function does not create its own this context. Instead, it inherits this from its immediate surrounding (lexical) scope.

// Syntax:
// One argument with Implicit Return
const arrowFunction1 = (parameter) => "Return Value";

// Two or more arguments with Implicit Return
const arrowFunction2 = (parameter1, parameter2) => "Return Value";

// Explicit Return
const arrowFunction3 = (parameter1, parameter2) => {
  return "Return Value";
};

// Example:
// Concise Syntax:
// Traditional Function Expression
const traditionalFunction = function (a, b) {
  return a + b;
};

// Arrow Function Expression
const arrowFunction = (a, b) => a + b;
