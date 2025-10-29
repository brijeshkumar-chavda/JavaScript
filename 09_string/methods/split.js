// Topic: split()

// Q. What is Delimiter?
// -> A delimiter in simple language is a character or a sequence of characters that separates or divides data into distinct parts.

// Q. What is the split() method?
// -> The split() method in JavaScript is used to split a string into an array of substrings based on a specified delimiter.

// Q. Why use split()?
// -> The split() method is useful when you need to manipulate or process a string by breaking it into smaller parts.

// Q. How does split() work?
// -> The split() method takes an optional delimiter as an argument and returns an array of substrings.
// -> If no delimiter is provided, the string is split into individual characters.
// -> If a delimiter is provided, the string is split at each occurrence of the delimiter.
// -> The delimiter can be a single character or a string of characters.

// Note:
// -> The split() method does not modify the original string. Instead, it returns a new array containing the substrings.
// -> If the delimiter is not found in the string, the split() method returns an array with the original string as the only element.
// -> The split() method can be used with regular expressions to split strings based on complex patterns.

// Syntax:
// string.split("delimiter")

// Example:

// Splitting a string into an array of words
const str = "Hello, World!";
const words = str.split(", ");
console.log(words); // Output: ["Hello", "World!"]

// Splitting a string into an array of characters
const str2 = "JavaScript";
const characters = str2.split("");
console.log(characters); // Output: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Splitting a string using a regular expression as the delimiter
const str3 = "apple, banana, orange";
const fruits = str3.split(/, /);
console.log(fruits); // Output: ["apple", "banana", "orange"]
