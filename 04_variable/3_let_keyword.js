// `let` Keyword

// Syntax
// let variableName = value;

// Initialized later
let variable;
variable = "value";

// Reassigned
let variable1 = "value1";
variable1 = "value2";

// Can't be redeclare
// let variable2 = "value1";
// let variable2 = "value2";

// Redeclare in different scope
// - Yes, you can redeclare the variable using the let keyword but in different scope.

// Declare in global scope
let variable2 = "value";

// Redeclare in function scope
function myFunction(parameter) {
  let variable2 = "value";
}

// Note
// - It can be initialized later.
// - It can be reassigned.
// - It can't be re-declare.
// - The let keyword is not hoisted, meaning it cannot be accessed before it is declared in the code.
// - The let keyword allows you to declare variables with the same name within different blocks, as long as they are in different scopes.
