// Topic: `new` Operator

// Q. What is `new` Operator?
// -> Used for object creation.

// Example:
function ConstructorFunction(parameter1, parameter2) {
  this.variable1 = parameter1;
  this.variable2 = parameter2;
}

let object = new ConstructorFunction("value1", 123);
console.log(object.variable1); // Output: "value1"
console.log(object.variable2); // Output: 123
