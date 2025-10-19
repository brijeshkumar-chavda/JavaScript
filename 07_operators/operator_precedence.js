// Topic: Operator Precedence

// Q. What is operator precedence?
// -> When we work with math expression in JavaScript it's evaluate multiplication and division first after that it will consider addition and subtraction.

let variable = 4 / 2 * 2 + 1;
console.log(variable);

// Q. How to manually evaluate expression?
// -> To calculate math expression manually in JavaScript we use small bracket (). We surround which expression we need to evaluate first.

let variable1 = (4 / 2) * (2 + 1);
console.log(Variable1);

// Note
// Adding string with number in JavaScript treat number as a string.
let variable2 = "str" + 1 + 2;
console.log(variable2);

// JavaScript evaluate code from left to right so it will do the arithmetic operation first than treat the answer as a string.
let variable3 = 1 + 2 + "str";
console.log(variable3);
