// Type Conversion (Datatype Conversion)

// Numbers

// What
// - Type conversion in JavaScript is the process of changing a value from one data type to another. This can happen automatically (called implicit conversion) or manually (called explicit conversion).

// Why
// - When we are fetching data from server sometimes data will have some numbers value. But the numbers are in string format for e.g. "999". At that time convert this to pure number 999 we need to use type conversion.

// How
// - Number(): Use this constructor to convert string formatted number to pure number "999" to 999.
// - parseFloat(): Use this method to convert string formatted floating number to floating number e.g. "3.14" to 3.14
// - parseInt(): Use this method to convert string formatted integer number to integer number e.g. "3.14" to 3

// To Convert Different Number Type
console.log(Number("123"));
console.log(parseFloat("3.14"));
console.log(parseInt("3.14"));

// To Convert In Number, String And Boolean
let variable = 123;
console.log(Number(variable));
console.log(String(variable));
console.log(Boolean(variable));
