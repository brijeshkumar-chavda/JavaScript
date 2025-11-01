// fill()

// What
// - It take custom value and replace element in array with custom value.
// - You can create empty array and fill the array with custom value.

// How
// - It take direct custom value and fill the array with it.
// - It can take custom value and replace element with custom value for selected start and end index.

// Note
// - It will modify the original array.

// Syntax
// Array.fill(custom value, start index, end index)

// Example
// Creating an array using the Array constructor and filling the array with custom value
const array = new Array(10).fill(10);
console.log(array);

// Adding custom value to select index
const array1 = [1, 2, 3, 4, 5];

const answer = array1.fill("*", 2, 4);
console.log(answer);
