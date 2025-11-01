// Hoisting

// Video link: https://youtu.be/9Ta1umc3tkQ?si=6vKcDEf2w159uWYw

// What
// - In Other programming languages you need to declare the variable first and then you need to initialize.

// Note
// - Function declaration are scanned and made available.
// - Variable declaration are scanned and made undefine.

// Example

// Var declarations (hoisted):

// Normal variable
var variable = "value"; // Declare & Initialization first
console.log(variable);

// But in JavaScript a variable can be used before it has been declared.
console.log(variable2); // accessing first
var variable2 = "value"; // Declare & Initialization later

// Function declarations (hoisted):

// Normal function
myFunction(); // Function call works even before declaration (hoisted)
function myFunction() {
  console.log("Hello! World");
}

// Function expression
var myFunction1 = function () {
  console.log("Hello! World");
};
