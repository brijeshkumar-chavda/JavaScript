// Topic: Global Scope

// Q. What is global scope?
// -> Variables declared outside of any function or block have global scope.
// -> They are accessible from anywhere in your code, including inside functions and other blocks.

let variable = "I am global scoped variable";

function function1() {
  console.log(variable); // Can access variable here
}

console.log(variable); // Can access variable here as well
