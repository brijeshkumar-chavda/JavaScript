// `let` Keyword

// Syntax
// let variableName = value;

// Example

// Initialized later
let variable;
variable = "value";

// Reassign with same type of a value
let variable1 = "value1";
variable1 = "value2";

// Reassign with different type of a value
variable1 = 123;
console.log(123);

// Can't be redeclare in the same scope
// let variable2 = "value1";
// let variable2 = "value2";

// Redeclare in the different scope 
// Declare in global scope
let variable2 = "value";

// Redeclare in function scope
function myFunction(parameter) {
  let variable2 = "value";
}
