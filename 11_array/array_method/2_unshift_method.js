/* ------------------------------ Unshift method ------------------------------ */

// Q. What is unshift method?
// - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. It shifts existing elements to higher indexes to make room for the new elements.

const array = [1, 2, 3, 4, 5];
array.unshift(-1, 0);
console.log(array);
