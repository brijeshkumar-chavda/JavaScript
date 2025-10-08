// `const` Keyword

// Syntax
// const constantName = value;

// Example

// Initialize & declare at the same time
const constant = "value";

// Can't be reassigned with same or different type of a value
// const constant = "value1";
// constant = "value2";

// Can't be redeclare in the same scope
// const constant = "value1";
// const constant = "value2";

// Can be redeclare in the different scope

// Declare in global scope
const variable2 = "value";

// Redeclare in function scope
function myFunction(parameter) {
  const variable2 = "value";
}
