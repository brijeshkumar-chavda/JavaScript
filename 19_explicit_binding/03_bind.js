// Bind

// What
// - The .bind() method is a predefined JavaScript function (inherited from Function.prototype) used to create a new function that has the same body and scope as the original function, but with the this keyword permanently bound to a specific object.

// Why
// - The primary purpose is to permanently fix the this context of a function so that it doesn't change regardless of how or where the function is executed later. This is essential for:
// - Event Handlers: Ensuring methods maintain the correct this (referring to the class instance) when passed as callbacks to DOM event listeners.
// - Asynchronous Callbacks: Maintaining context when a function is executed later (e.g., inside setTimeout or a promise).
// - Partial Function Application: Creating a new function with some of the initial arguments preset (currying).

// How
// - You call the .bind() method on the original function, passing the desired this object as the very first argument. This process does not execute the function immediately; it returns a new function that must be called later.

// Syntax
// const newFunction = originalFunction.bind(this, argument1, argument2, ...)

const object = {
  key: "value",
};

function function1(parameter) {
  console.log(`${this.key} + ${parameter}`);
}

const newFunction = function1.bind(object, "element");
newFunction();
