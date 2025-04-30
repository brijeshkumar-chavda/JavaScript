// Function Expression

// What
// - A function expression is a way to define a function by assigning it to a variable. Instead of declaring a function using the function keyword followed by a name at the beginning of a statement (which is a function declaration), you create an anonymous (or sometimes named) function as part of an expression, usually an assignment.

// Example


const myVariable = function (parameter1, parameter2) {
  return parameter1 + parameter2;
};

const myVariable2 = myVariable(1, 2); // Not a function expression. You are Calling the function and storing the return value only.
console.log(typeof myVariable);

// Without return keyword
// - If you create a function without the return and store that function inside the variable and check the value it will be undefined. Because the function doesn't returning the value.
function myFunction(parameter1, parameter2) {
  let result = parameter1 + parameter2;
}

let result = myFunction(1, 2);
console.log(result); // output: undefined

// With return keyword
function myFunction1(parameter1, parameter2) {
  // let result = parameter1 + parameter2;
  // return result;
  return parameter1 + parameter2;
}

let result1 = myFunction1(1, 2);
console.log(result1); // output: 3