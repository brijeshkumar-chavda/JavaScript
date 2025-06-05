// `var` Keyword (Not Recommended)

// What
// - var is a keyword in JavaScript used to declare variables.
// - It was the primary way to declare variables in older versions of JavaScript (before ES6/ECMAScript 2015).
// - Variables declared with var can hold any type of JavaScript value (numbers, strings, objects, etc.).

// Why
// - var was the original mechanism for creating variables in JavaScript.
// - Legacy Code: You'll encounter var in older JavaScript codebases.
// - Understanding JavaScript's Evolution: Knowing var helps appreciate the improvements introduced by let and const in ES6.
// - Avoiding Potential Pitfalls: var has some quirks related to scope and hoisting that can lead to unexpected behavior if not understood.

// How
// - You declare a variable using the var keyword followed by the variable name.
// - You can optionally initialize the variable with a value at the time of declaration using the assignment operator (=).

// Syntax
// var variableName = "value";

// Example
// Initialized later
var variable;
variable = "value";

// Redeclare
// - As you can see your are using same variable name twice.
// - It will take latest updated value.
var variable = "value1";
var variable = "value2";

// Reassigned
var variable = "value1";
variable = "value2";

// Note
// - It can be initialized later.
// - It can be redeclare.
// - It can be reassigned.
// - It has global scope.

// Function Scope:
// - Variables declared with var have function scope.
// - This means they are only accessible within the function where they are declared.
// - If declared outside any function, they have global scope.
// Hoisting:
// - var declarations are hoisted to the top of their scope (either function or global).
// - This means you can use a var variable before it's declared in the code, but its value will be undefined until the line of declaration is reached.
// Redeclaration:
// - You can redeclare a variable with var in the same scope without causing an error (though it's generally bad practice).
// No Block Scope:
// - var does not respect block scope (e.g., if blocks, for loops).
// - Variables declared with var inside these blocks are still accessible outside the block.
// - Due to these characteristics, especially the lack of block scope and the potential for hoisting-related issues,
//   the let and const keywords were introduced in ES6 as more modern and predictable ways to declare variables.
// - It's generally recommended to use let for variables that might be reassigned and const for variables that should not be reassigned, and to avoid using var in new JavaScript code.

// When
// - You will encounter var in older JavaScript code.
// - When writing new JavaScript, it's generally recommended to use let and const instead due to their more predictable scoping rules.
// - You might still use var if you need to maintain compatibility with very old JavaScript environments that don't fully support ES6.

// Analogy
// - Think of var as an older way of labeling boxes in your house.
// - You can have multiple boxes with the same label, and if a box is "declared" in a room (function), it's generally meant to stay in that room.
// - However, sometimes these boxes can mysteriously appear at the top of the room before you even put them there (hoisting), but they'll be empty until you actually place something inside.
// - Also, if you decide to put another label with the same name on a box, the house won't complain, but it might get confusing.
// - let and const are like a newer, more organized labeling system where labels are more specific to the area (block scope) and you have clearer rules about reusing labels.
