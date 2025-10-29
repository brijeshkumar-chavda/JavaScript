// Topic: padStart()

// Q. What is padStart()?
// -> It's add padding to string. As you can see in syntax there is parameter called targetLength which determine how much length string should have and there is padString parameter which take string that you want to add to original string as padding. If the original string length is less then targetLength it will take the padString and add to the original's start.

// Syntax:
// string.padStart(targetLength, padString);

let str = "Hello world";
let var1 = str.padStart(20, "0");

console.log(var1);
