// console.table()

// What
// - It is a method in JavaScript that displays tabular data in a visually appealing format in the browser's console.
// - It takes an array or object as an argument and displays it as a table

// Why
// - It is useful for debugging and inspecting complex data structures, such as arrays of objects or nested objects.
// - It provides a clear and organized view of the data, making it easier to analyze and understand.

// How
// - It iterates over the elements of the provided array or object and displays them in a table format in the console.
// - It automatically generates column headers based on the properties of the elements.

// Note
// - console.table() is a helpful debugging tool, but it should not be used for logging or displaying data in a production environment.

// Syntax
// console.table(variable,array or object);

// Example
// 1. Passing multiple variables
const variable1 = "value1";
const variable2 = "value2";
const variable3 = "value3";

console.table(variable1, variable2, variable3);

// 2. Passing array
const variable = [{ key1: "value1" }, { key2: "value2" }, { key3: "value3" }];

console.table(variable);

// 3. Passing object
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.table(object);