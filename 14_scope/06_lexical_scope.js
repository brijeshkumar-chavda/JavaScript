// Topic: Lexical Scope (Static Scope)

// Q.What is lexical scope?
// -> The scope of a variable is determined by where the function is physically written (defined) in the code, not where it is called later.

// Q. What does lexical scope imply?
// -> It establishes a predictable rule for variable lookup. When the JavaScript engine needs a variable, it looks:
// -> In the current function's scope.
// -> Then, it looks up in the immediate containing (outer) function's scope.
// -> It continues this chain until it reaches the global scope.

// Note:
// -> If the inner scope has a variable with the same name as an outer scope, the inner variable takes shadowing.

// Syntax:
function outerFunction() {
  let outerVariable = "I am outer variable";

  function innerFunction() {
    let innerVariable = "I am inner variable";

    // Inner function can access both inner and outer variables
    console.log(innerVariable);
    console.log(outerVariable);
  }
  innerFunction();
}
outerFunction();

// Example:
let globalVariable = 1;

function parentFunction() {
  let parentVariable = 2;
  function childFunction() {
    let childVariable = 3;
    // Lexical Scope grants access to all outer variables:
    console.log(globalVariable + parentVariable + childVariable);
  }
  childFunction();
}
parentFunction(); // Output: 6

// Analogy:
// -> Lexical Scope is the structure of an apartment building. An apartment (inner function) can always access the mailboxes (variables) in its immediate hallway (outer function) because it is physically built into that structure.