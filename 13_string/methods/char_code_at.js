// Topic: charCodeAt()

// Q. What is charCodeAt()?
// -> It returns the unicode of the character at a specified index in a string:
// -> The method returns a UTF-16 code (an integer between 0 and 65535).

// Syntax:
// string.charCodeAt(indexNumber);

let string = "Hello world";
let variable = string.charCodeAt(3);
console.log(variable);
