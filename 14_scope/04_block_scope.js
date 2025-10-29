// Topic: Block Scope

// Q. What is block scope?
// -> Introduced in ECMAScript 6 (ES6), block scope applies to variables declared with let or const within blocks created by curly braces {}.
// -> These variables are only accessible within the block they are declared in, not outside of it. This includes if statements, for loops, and other block-based constructs.

if (true) {
  let variable = "I am block scoped variable";
  console.log(variable); // Can access variable here
}

// ReferenceError: variable is not defined (variable is not accessible here)
console.log(variable);
