// Topic: var keyword scope

// Q. How scope works for `var` keyword?

// 1. Function Scope
// -> If a variable is declared with var inside a function, it is scoped to that entire function. It cannot be accessed outside the function, but it ignores any inner blocks (if statements, for loops, etc.).

// Note:
// Inside function -> The variable limited to the function.
// Inside block (if, for, while) -> The variable leaks out of the block to the entire function.

// Example:
function function1() {
  if (true) {
    // variable declared with var inside if block
    var variable = 10;
  }

  // Accessing variable outside the if block but inside the function
  console.log(variable);
}

// Can't access variable outside the function
console.log(variable);

// 2. Global Scope
// -> If a variable is declared with var outside of any function, it is created in the global scope.
// -> In a browser environment, this means it becomes a property of the global window object.
// -> Variables in the global scope are available to all scripts and functions on that page.

// 3. Hoisting
// -> var declarations are subject to hoisting, which also plays a major role in its scope behavior.
// -> When JavaScript executes, the declaration (but not the assignment/value) of a var variable is moved to the top of its function or global scope.
// -> This means you can reference a var variable before its declaration in the code, though its value will be undefined until the assignment line is reached.

// Example:
console.log(variable); // Outputs: undefined due to hoisting
var variable = "value";
console.log(variable); // Outputs: "value" after assignment
