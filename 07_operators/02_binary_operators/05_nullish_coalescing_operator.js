// Topic: Nullish Coalescing Operator

// Q. What is nullish coalescing operator?
// -> It use when variable has null or undefine to give default value to the variable.

// Syntax:
// variable = null/ undefine ?? defaultValue;

// Example:
let variable = null ?? "default value";
console.log(variable);

// Note:
// -> It will check for the value. Which ever value it will find first. It will be default value
const variable1 = null ?? "value1" ?? "value2";
console.log(variable1);
