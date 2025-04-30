// console.table()

// What
// - console.table() is a method in JavaScript that displays tabular data in a visually appealing format in the browser's console.
// - It takes an array or object as an argument and displays it as a table

// Why
// - console.table() is useful for debugging and inspecting complex data structures, such as arrays of objects or nested objects.
// - It provides a clear and organized view of the data, making it easier to analyze and understand.

// How
// - console.table() iterates over the elements of the provided array or object and displays them in a table format in the console.
// - It automatically generates column headers based on the properties of the elements.

// Syntax
// console.table(variable,array or Object);

// Example: 1 Passing array as argument
const variable1 = "value 1";
const variable2 = "value 2";
const variable3 = "value 3";

console.table(variable1, variable2, variable3);

// Example: 2 Passing object as argument
const variable = [
  {key1: "value1"},
  {key2: "value2"},
  {key3: "value3"},
];

console.table(variable);

// Example: 3
const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.table(object);

// Note
// - console.table() is a helpful debugging tool, but it should not be used for logging or displaying data in a production environment.

// When
// - Use console.table() when you need to inspect complex data structures, such as arrays of objects or nested objects, in the browser's console.
// - Use console.table() to display tabular data in a more readable format for debugging purposes.
// - Use console.table() to analyze and compare data in a structured manner.