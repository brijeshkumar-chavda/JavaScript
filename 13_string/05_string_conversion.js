// Topic: String Conversion

// Number to String
let number = 100;
number = String(100); // Using string constructor
console.log(typeof number);

const number1 = 100 + ""; // Add empty string
console.log(typeof number1);

// String to Number
const string = "100";
string = Number(string); // Using number constructor
console.log(typeof string);

const string1 = +"100"; // Adding `+` symbol in front of string
console.log(typeof string1);
