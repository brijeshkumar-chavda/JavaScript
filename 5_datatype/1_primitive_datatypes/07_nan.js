// NaN (Not a Number)

// What
// - `NaN` stands for Not-a-Number.
// - It's a standalone value in JavaScript that shows up when you do something that doesn't make sense with numbers.

// Why
// -  NaN is for when a math operation can't give a proper number answer, for example dividing zero by zero. At that time JavaScript will return NaN.

// How
// - When you try to do math with things that aren't numbers, like dividing text by a number, you get NaN. It's like JavaScript's way of saying "I can't give you a real number because this doesn't work."

// Example
let division = 0 / 0; // This division results in NaN
console.log(division); // Output: NaN

// Note
// NaN is Number (But Short Of)
// - In JavaScript, typeof NaN returns "number" even though it represents "Not a Number."
// - This is because NaN is a special numeric value used to indicate an invalid result.
// - It occupies a space within the number system but doesn't represent a valid mathematical value.
// - Be careful with NaN. If you use it in a calculation, the final result will also be NaN.

// NaN in Comparisons
// - Interestingly, even NaN compared to itself using comparison operators like === or !== returns false.
// - This is because NaN is not equal to anything, including itself.
// - For example, NaN === NaN returns false, and NaN !== NaN returns true.
// - To check if a value is NaN, use the isNaN() method or the Number.isNaN() static method.

let result = 0 / 0; // This division results in NaN
console.log(result); // Output: NaN
console.log(typeof result); // Output: "number"

console.log(result === NaN); // Output: false
console.log(result !== NaN); // Output: true

// How to Handle NaN? (Recommended)
console.log(isNaN(result)); // Output: true
console.log(Number.isNaN(result)); // Output: true

// - It's important to handle NaN in your code, especially when dealing with user input or calculations, to ensure that your program behaves as expected and doesn't produce unexpected results due to the presence of NaN.
