// Topic: Function Scope (Local Scope)

// Q. What is function scope?
// -> Variables declared within a function have function scope (also known as local scope).
// -> They are only accessible within the function they are declared in, not outside of it.

function function1() {
  let variable = "I am function scoped variable";
  console.log(variable); // Can access variable here
}

// ReferenceError: variable is not defined (variable is not accessible here)
// console.log(variable); 
