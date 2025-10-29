// Topic: charAt()

// Q. What is charAt()?
// -> The charAt() method returns the character at a specified index (position) in a string.

// Note:
// -> If no character is found charAt() return empty string.

// Syntax:
// string.charAt(indexNumber);

let string = "Hello world";
let variable = string.charAt(3);
// console.log(variable);

let string2 = "JavaScript";
let variable2 = string2.charAt(100); // index out of range
console.log(typeof variable2); // return empty string
