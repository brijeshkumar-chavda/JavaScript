// apply()

// What
// - The .apply() method is a predefined JavaScript function (inherited from Function.prototype) that is used to invoke a function immediately while explicitly specifying what the this keyword should refer to inside that function, and supplying the function's arguments as an array (or array-like object).

// Why
// - Arguments are Dynamic: The arguments you need to pass to the function are already in an array or you don't know how many there will be.
// - Array Utility on Collections: You want to use a built-in array method (like Array.prototype.push) on an array-like object (like the arguments object in non-strict functions, or an HTML collection).
// - Function Borrowing: Allowing an object to borrow a method from another object or a built-in object (e.g., using Math.max.apply(null, myArray) to find the max value in an array).

// How
// - You execute the function using the .apply() method on the function itself, passing the desired this object as the very first argument, followed by a single array containing all the arguments the function needs.

// Syntax
// mainObject.method.call(object, parameter)

const object = {
  key: "value",
};

function ConstructorFunction(parameter1, parameter2) {
  console.log(`${this.key} + ${parameter1} + ${parameter2}`);
}

ConstructorFunction.apply(object, ["element1", "element2"]);
