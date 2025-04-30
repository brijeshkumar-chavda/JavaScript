// Unary Operator `+`

// 1. `+` Operator: Unary Operator is nothing but `+` symbol which use to convert number which written in string format to number.

// Example
const numberAsString = "123";
const convertToNumber = +numberAsString;
console.log(typeof convertToNumber);

// 2. `void` Operator: Evaluates an expression but discards the result, returning undefined.

// Example
function sayHello() {
  console.log("Hello!"); // This line is executed, but its result is discarded
  void 0; // This line explicitly returns undefined using void
}
console.log(sayHello());

// 3. `delete` Operator: Attempts to delete a property from an object.
// Note: Deleting properties can have unintended consequences, so use it cautiously.
let person = { name: "Alice", age: 30 };

delete person.age;
console.log("age" in person); // Output: false (age property is deleted)
