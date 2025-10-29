// Topic: padEnd()

// Q. What is padEnd()?
// -> It's add padding to string. As you can see in syntax there is parameter called targetLength which determine how much length string should have and there is padString parameter which take string that you want to add to original string as padding. If the original string length is less then targetLength it will take the padString and add to the original's end.

// Syntax:
// string.padEnd(targetLength, padString);

let string = "Hello world";
let variable = string.padEnd(20, "0");

console.log(variable);
