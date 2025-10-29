// Block Scope

// Q.What is block scope?
// - Block scope refers to the visibility and accessibility of variables within blocks of code, such as loops (for, while), conditional statements (if, switch), and code blocks ({}). Block scope was introduced in ECMAScript 6 with the addition of the let and const keywords. Variables declared with let and const are block-scoped and only accessible within the block they are defined in.

// Q.Why use block scope?
// - Block scope is particularly useful for preventing variable leaks and unintended access outside the intended scope. It provides more fine-grained control over variable visibility and helps avoid naming conflicts.

// NOTE
// - In this example, x is block-scoped to the myFunction() and accessible within the if block. However, y is block-scoped to the if block and is not accessible outside of it.

function myFunction() {
  let x = 10;

  if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  console.log(x); // Output: 10
  console.log(y); // ReferenceError: y is not defined
}

myFunction();
