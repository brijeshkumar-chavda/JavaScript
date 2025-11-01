// `.filter()`

// What
// - .filter() is a built-in method for arrays in JavaScript. It creates a new array containing only the elements that pass a test implemented by a provided function.
// - It acts as a filtering mechanism, selecting elements from the original array based on a specific condition.

// Why
// - It offers a concise and efficient way to filter elements from an array based on a custom criteria.
// - It avoids the need for manual looping and conditional statements within the loop, leading to cleaner code.

// How
// - You provide a callback function to .filter(). This function is called for each element in the original array.
// - The callback function takes a single argument, which is the current element being processed in the iteration.
// - The callback function should return a true value if the element should be included in the new filtered array, and false otherwise.

// Syntax
// const newArray = originalArray.filter(callbackFunction);

// Example

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number = array.filter((element) => {
//   return element > 5;
// });
const newNumber = array.filter((element) => element > 5);
console.log(newNumber);

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

let userBook = books.filter((book) => book.genre === "History");
console.log(userBook);

userBook = books.filter(
  (book) => book.edition >= 2000 && book.genre === "History"
);
console.log(userBook);
