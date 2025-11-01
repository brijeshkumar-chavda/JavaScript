// Numbers

const number = 3.14619;
console.log(number.toString());
console.log(number.toFixed(2));
console.log(number.toPrecision(4));

const loanAmount = 100000;
console.log(loanAmount.toLocaleString("en-IN"));

// Math

// What
// - Math is object in JavaScript.
// - It has built in method which helps for math related operations.

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.14));
console.log(Math.ceil(3.14));
console.log(Math.floor(3.14));
console.log(Math.min(1, 2, 3));
console.log(Math.max(5, 6, 7));

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const minimumNumber = 10;
const maximumNumber = 20;

console.log(
  Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) +
    minimumNumber
);
