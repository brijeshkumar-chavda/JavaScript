// `map()`

// What
// - .map() is a built-in method for arrays in JavaScript. It creates a new array by applying a function to all elements of the original array.
// - It transforms each element in the original array based on the provided function, giving you a new array with the results.

// Why
// - It offers a concise and efficient way to perform the same operation on every element in an array, creating a new transformed array.
// - It avoids repetitive code for iterating through an array and modifying each element individually.

// How
// - You provide a callback function to .map(). This function is called for each element in the original array.
// - The callback function takes three arguments (though the last two are optional):
// - currentValue: The current element being processed in the iteration.
// - index (optional): The index of the current element (if needed).
// - array (optional): The original array being iterated over (if needed).
// - The callback function should return a value that will be included in the new array.

// Syntax
// const newArray = originalArray.map(callbackFunction);

// Example
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = array.map((number) => number < 10);
console.log(newNumbers);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const fictionBook = books
  .filter((book) => book.genre === "Fiction")
  .filter((book) => book.edition > 2000)
  .map((book) => book.edition + 1000);

console.log(fictionBook);
