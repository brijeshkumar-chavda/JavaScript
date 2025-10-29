// Topic: Function Expression

// Q. What is a function expression?
// -> A function expression is a way to define a function by assigning it to a variable. Instead of declaring a function using the function keyword followed by a name at the beginning of a statement (which is a function declaration), you create an anonymous (or sometimes named) function as part of an expression, usually an assignment.

// Q. Why use function expression?
// -> Enable Closures and IIFEs: They are necessary for creating IIFEs (Immediately Invoked Function Expressions) and defining functions that close over a specific scope.
// -> Support Callback Functions: They are the standard way to define functions passed as arguments to other functions (e.g., in Array.prototype.map(), setTimeout(), or when handling events).
// -> Control Hoisting: Unlike declarations, expressions are not hoisted completely to the top of their scope, which helps prevent referencing a function before it has been defined, leading to more predictable code flow.

// Example:

// Storing regular named function inside a variable.
const variable = function functionName() {
  return "I am regular named function stored inside a variable";
};

// Storing regular unnamed function inside a variable.
const variable1 = function () {
  return "I am regular unnamed function stored inside a variable";
};
