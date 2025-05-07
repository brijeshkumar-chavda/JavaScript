// Function Are Object

// What
// - In JavaScript, a function is a special type of object. It's not just a block of code that executes; it also has properties and methods, just like regular JavaScript objects. You can think of a function as an object that is also callable.

// Why
// Treating functions as objects provides several powerful capabilities:
// First-Class Citizens: This is the most important reason. It means functions can be:
// - Assigned to variables.
// - Passed as arguments to other functions (callbacks).
// - Returned from other functions (higher-order functions).
// - Stored in data structures (arrays, objects).
// Adding Properties: You can attach custom properties to a function, just like you can with any object. This allows you to associate metadata or related values directly with the function.
// Methods: Functions also have built-in methods like call(), apply(), and bind(), which are crucial for controlling how a function is executed and what this value it uses.
// Prototype: Every function in JavaScript has a prototype property (which is itself an object). This is the foundation of JavaScript's prototypal inheritance. Objects created using the new keyword with a function (as a constructor) will inherit properties and methods from this prototype object.


// How
// - When a function is created, the JavaScript engine creates a function object. This object contains:
// - The executable code of the function.
// - A set of built-in properties (like name, length, and prototype).
// - Internal methods that handle how the function is called and behaves.

// Example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.language = "English";
console.log(greet.language); // Output: English

greet.explain = function() {
  console.log(`This greeting is in ${this.language}.`);
};
greet.explain(); // Output: This greeting is in English.

// Note
// - While functions behave like objects, there's a subtle distinction. They have an internal [[Call]] method that allows them to be executed, which regular objects don't have. The typeof operator reflects this special nature by returning "function" for functions, even though they are fundamentally objects.
// - To see function as a object use `console.dir(function_name)`. It will show all the properties of that function in object form