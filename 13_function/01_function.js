// Function

// What
// - Function is a reusable block of code that performs a specific task or calculates a value.

// Why
// - Functions help break down a program into smaller, more manageable pieces.
// - They allow for code reuse, reducing redundancy and improving code readability.
// - Functions enable modular programming, making it easier to maintain and debug code.

// How
// - Functions are defined using the function keyword, followed by the function name and a set of parentheses.
// - Inside the function, you can write code to perform the desired task or calculate a value.
// - Functions can accept parameters, which are values passed into the function when it is called.
// - Functions can return a value using the return statement.

// Syntax
// function functionName(parameter1, parameter2){
//  Code...
// return
// }
// functionName(argument1, argument2)

// Example

// Function Declaration
function myFunction(parameter1, parameter2) {
  return console.log("I am Function Declaration");
}

myFunction(); // Calling function
myFunction(1,2) // Passing arguments
console.log(myFunction(1, 2)); // Printing function
console.log(myFunction); // Passing the function's reference only



// How to take parameter values
function loginUserName(username = "default value") {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }
  return `Welcome ${username}!`;
}

loginUserName("Brijesh"); // This will not give you the output that function is returning.
const myVariable = loginUserName("Brijesh"); // You need to store the function inside variable to hold the returning value.
console.log(myVariable);

// Note
// - When argument doesn't pass it will take value as a undefined (In other word empty function return undefine).
// - functionName -> Reference (function definition)
// - functionName() -> Execution (Calling)
// - If you use {}, you need to use return keyword for getting value form the function.