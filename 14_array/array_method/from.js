// from()

// What
// - To convert the single value into array.

// Note
// - It will return new array.
// - If it's unable to convert the passed value to array. It will return the empty array.

// Example
const variable = "value";
console.log(Array.from(variable));

// Can't convert to array and return empty array
console.log(Array.from({ key: "value" }));
