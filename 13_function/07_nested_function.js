// Topic: Nested Function

// Q. What is nested function?
// -> A Nested Function (or inner function) is simply a function that is defined inside the body of another function (the outer function).

// Q. Why use nested function?
// -> Nested functions can be useful for creating private variables and encapsulating functionality. By defining functions inside other functions, you can limit their accessibility and keep your code organized.

// Note:
// -> When a function is defined inside another function, it becomes a local function, meaning it is only accessible within the scope of the outer function.
// -> A nested function retains access to the outer function's scope even after the outer function has finished executing. This ability to remember and access its birth environment is what is called a Closure.

// Example:
function outerFunction() {
  // Outer function scope
  function innerFunction() {
    // Inner function scope
    console.log("This is the inner function.");
  }
  console.log("This is the outer function.");

  // Call the inner function
  innerFunction();
}

// Call the outer function
outerFunction();
