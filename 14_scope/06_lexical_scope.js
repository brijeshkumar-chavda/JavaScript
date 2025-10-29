// Topic: Lexical Scope (Static Scope)

// Q.What is lexical scope?
// - Nested functions can access variables and parameters from their containing functions. This concept is known as "lexical scoping."

function outerFunction() {
  let outerVariable = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  innerFunction();
}

outerFunction();
