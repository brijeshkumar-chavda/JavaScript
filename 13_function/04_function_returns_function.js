// Topic: Function Returning Function

// Q.What is function returning function?
// -> When a function returns another function, the returned function can be assigned to a variable and invoked later.

function outerFunction() {
  function innerFunction() {
    return "I am inner function";
  }
  return innerFunction;
}

// Call the outer function and assign the returned function to a variable
const variable = outerFunction();

// Call the returned function
arrowFunction1();
