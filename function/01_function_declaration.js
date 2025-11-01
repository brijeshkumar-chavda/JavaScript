// Topic: Function

// Q. What is Function?
// -> Function is a reusable block of code that performs a specific task or calculates a value.

// Q. Why use Function?
// -> Functions help break down a program into smaller, more manageable pieces.
// -> They allow for code reuse, reducing redundancy and improving code readability.
// -> Functions enable modular programming, making it easier to maintain and debug code.

// Q. How to use Function?
// -> Functions are defined using the function keyword, followed by the function name and a set of parentheses.
// -> Inside the function, you can write code to perform the desired task or calculate a value.
// -> Functions can accept parameters, which are values passed into the function when it is called.
// -> Functions can return a value using the return statement.

// Syntax:
// function functionName(parameter1, parameter2){
//  Code...
// return
// }
// functionName(argument1, argument2)

// Note:
// -> When argument doesn't pass it will take value as a undefined.
// -> functionName: Reference (function definition)
// -> functionName(): Execution (Calling)

// Example:

// Function Declaration
function function1(parameter1, parameter2) {
  return console.log("I am Function Declaration");
}

// Calling function
function1();

// Passing arguments
function1(1, 2);

// Printing function
console.log(function1(1, 2));

// Passing the function's reference only
console.log(function1);

// Q. How to store function's return value in a variable?
// -> If you have console.log() inside the function, it will only print the value in the terminal without using the return keyword. But it won't return anything.
// -> If you have code below the return keyword in the function. It will never execute because return statement exits the function.

function function1() {
  return "I am return value from function";
  console.log("This line will never execute");
}

const variable = function1();
console.log(arrowFunction1);
