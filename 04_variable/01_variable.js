// Variable

// What
// - Variables in JavaScript are like containers where you can store information. This information can be numbers, text, lists, or even more complex data.

// Why
// - Variables are used to keep track of data that we want to use or change in our programs. They help us store values temporarily and reuse them later in our code.

// Syntax

// Single variable
var variable = 1 // Not Recommended
let variable1 = 2
const variable2 = 3

// Multiple variable with same value
// - First declare and use comma to separate the variables.
// - Second initialize and use equal sign instead of comma.
let variable3, variable4, variable5;
variable3 = variable4 = variable5 = 1;

// Multiple variable with different value
// - Declaring and initializing at the same time.
// - Use comma to separate the variables.
let variable6 = 1,
  variable7 = 2,
  variable8 = 3;

// Note
// - To create variable you can use var, let and const keyword.
// - `var` keyword has been deprecated so it's not recommended to use. Only use `let` and `const`.
// - The fact that whenever we declare a variable and assign a value to it, it’s not the variable that holds the value but rather the variable just holds an address in the memory where the initialized value is stored. 
// - For example:
let age = 21;
// - when we use age, it gets replaced with 21, but that does not mean that age contains 21, rather what it means is that the variable age contains the address of the memory location where 21 is stored.
// - To create variable you can use var, let and const keyword.
// - `var` keyword has been deprecated so it's not recommended to use. Only use `let` and `const`.

