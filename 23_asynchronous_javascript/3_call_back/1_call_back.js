// Call Back Function

// Video: https://youtu.be/i2SPq-nb3NQ?si=WDJvXblySIo-A9wi

// What
// - A call back function is a function which passed as an argument to another function.
// - Call back function called after the main function completes its execution.

// Why
// - To handle asynchronous operations.
// - To control the flow of execution.

// Syntax
function mainFunction(callback) {
  // ... do something
  callback();
}

function callbackFunction() {
  // ... do something after mainFunction finishes
}

mainFunction(callbackFunction);

// How
// - Sometimes we need to execute a functions in certain order.

// Example 1: Calling functions in a order manually.
function orderPizza() {
  return console.log("Pizza order has been placed.");
}
function deliverPizza() {
  return console.log("Pizza has been delivered.");
}

orderPizza();
deliverPizza();

// Example 2: Nesting function inside the function to execute sequence wise.
function calculation(number1, number2) {
  const result = number1 + number2;
  displayResult(result);
}

function displayResult(result) {
  console.log(result);
}

calculation(5, 10);

// - The problem with the first example above, is that you have to call two functions to display the result.
// - The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// Example 3: Now it is time to bring in a callback.
function calculation2(number1, number2, callback) {
  const result = number1 + number2;
  callback(result);
}

function display2(result) {
  console.log(result);
}

calculation2(5, 10, display2);

// Note
// - JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// - Overusing callbacks can lead to "callback hell", making code hard to read and maintain. Consider using Promises or async/await for complex asynchronous operations.

// Analogy
// - Let's imagine you're going to a restaurant and you want to place an order. You have a special request: you want to be notified when your order is ready so that you can pick it up.
// - In this scenario, you are the main program or the "caller", and the restaurant is the function you're calling. The restaurant has a chef who will prepare your order, and you need a way to be notified when the order is ready.
// - Here's where the concept of a callback comes in. You give the restaurant your phone number and ask them to call you back when the order is ready. In this case, your phone number is the callback function.
// - In JavaScript, a callback function is similar to giving your phone number to the restaurant. It's a function that you provide as an argument to another function. The main function (the "caller") will call the callback function at an appropriate time, usually when a certain task or operation is completed.
