// Nullish Coalescing Operator

// What
// - It use when variable has null or undefine to give default value to the variable.

// SYNTAX
// variableName = null/ undefine ?? defaultValue;

let myVariable = null ?? "default value";
console.log(myVariable);

// It will check for the value. Which ever value it will find first. It will be default value
const myVariable1 = null ?? "value1" ?? "value2";
console.log(myVariable1);
