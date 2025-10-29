// Topic: Closure

// Resource:
// -> https://youtu.be/VaH09NXQZ58?si=VrdFy6_vHrT8iuCf

// Q. What is Closure?
// -> A Closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned.

// Q. Why use Closure?
// -> Closures are useful for creating private variables and functions. They allow you to encapsulate functionality and maintain state in a controlled manner.

// Note:
// -> This is all sound similar to creating a class and then instances so you get separate states for each instance.
// -> So JavaScript is using this closure concept to mimic private variables and methods, similar to how classes work in other programming languages and this is known as a factory function pattern.
// -> But know new version of a JavaScript has actual class syntax with private fields and methods using # symbol so you can create private variables and methods directly inside a class without needing to use closures.
// -> But still closures are widely used in JavaScript for various purposes like data encapsulation, function factories, and maintaining state in asynchronous programming.

// Syntax:
function outerFunction() {
  let outerVariable = 0;
  return function returnedFunction() {
    // This returned function forms the closure
    outerVariable += 1;
    return outerVariable;
  };
}
const closureFunction = outerFunction();
console.log(closureFunction()); // Output: 1

// Example:
function createCounter() {
  let count = 0; // The private variable
  return function () {
    count++;
    return count;
  };
}

const counterA = createCounter(); // outer() runs and returns the inner function
const counterB = createCounter(); // A new, separate closure is created

console.log(counterA()); // Output: 1
console.log(counterA()); // Output: 2
console.log(counterB()); // Output: 1 (The private 'count' is separate)
