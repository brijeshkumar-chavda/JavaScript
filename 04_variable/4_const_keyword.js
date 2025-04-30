// `const` Keyword

// What
// - The const keyword in JavaScript is used to declare a read-only variable.

// Why
//- The const keyword is used to declare variables in JavaScript to store and manipulate data. It provides immutability and helps prevent accidental modifications to variables.
//- The const keyword is recommended for modern JavaScript development as it enforces read-only variables and helps prevent bugs.

// How
// - When you declare a variable using the const keyword, JavaScript reserves memory space to store the variable's value. You can then assign a value to the variable and use it in your program.
// - The const keyword ensures that the variable's value cannot be modified once it is assigned. If you try to reassign a value to a const variable, JavaScript will throw an error.

// Syntax
// const constantName = value;

// Initialize & declare at the same time
const constant = "value";

// Can't be redeclare
// const constant = "value1";
// const constant = "value2";

// Can't be reassigned
// const constant = "value1";
// constant = "value2";

// Redeclare in different scope
const variable2 = "value"; // Declare in global scope

function myFunction(parameter) {
  const variable2 = "value"; // Redeclare in function scope
}

// Constant Objects and Arrays
// - The keyword const is a little misleading.
// - It does not define a constant value. It defines a constant reference to a value. Because of this...

// Can't:
// - Reassign a constant value
// - Reassign a constant array
// - Reassign a constant object

// Can:
// - Change the elements of constant array
// - Change the properties of constant object

// Note
// - It can initialized & declared at same time.
// - It can't be reassigned.
// - It can't be redeclare.
// - The const keyword is not hoisted, meaning it cannot be accessed before it is declared in the code.
// - The const keyword allows you to declare variables with the same name within different scopes, as long as they are in different blocks.
// - The const keyword is block-scoped, meaning that the variable's value can only be accessed within the block where it is declared.

// When
// - Always declare a variable with const when you know that the value should not be changed.
// - Use const when you declare a new array, object or function
