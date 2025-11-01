// Topic: Array Destructure

// Q. What is Array Destructuring?
// -> Array destructuring is a feature in JavaScript that allows you to extract elements from an array and assign them to individual variables.

const array = [1, 2, 3, 4, 5];

// Dry syntax
let variable1 = array[0];
let variable2 = array[1];
let variable3 = array[2];
console.log(variable1);
console.log(variable2);
console.log(variable3);

// Better syntax
let [variable4, variable5, variable6] = array;
console.log(variable4);
console.log(variable5);
console.log(variable6);

// Store one element in single variable and creating new array using remaining elements.
let [variable7, ...newArray] = array;
console.log(variable7);
console.log(newArray);

// Skipping single element when storing array elements inside variables.
let [variable8, , variable9] = array;
console.log(variable8);
console.log(variable9);

// Swapping values using array destructuring
let variable10 = "value1";
let variable11 = "value2";
[variable11, variable10] = [variable10, variable11];
console.log(variable10);
console.log(variable11);
