// Topic: forEach()

// Q. What is forEach()?
// -> The forEach() method is a built-in function in JavaScript that allows you to iterate over the elements of an array or array-like object and perform a specified action for each element. It provides a convenient way to iterate through the elements without the need for explicit loop constructs like for or while loops.

// Q. How forEach and the Callback Work?
// -> The forEach method is a built-in function on the Array.prototype. It is the executor that controls the loop.
// -> forEach is the Main Method (The Executor).
// -> The Callback is the Instruction (The Task).
// -> The function you pass into forEach is the callback. This is the set of instructions you want to execute for each element.

// The Execution Flow (The Correct Order):
// -> When you call myArray.forEach(callbackFunction), the forEach method starts executing first.
// -> Internally, forEach iterates through the array elements (from index 0 to the end).
// -> For each element, the forEach method calls (executes) the callbackFunction, passing the current element, its index, and the array itself as arguments.
// -> The callbackFunction performs its task (e.g., logging a value, updating a database, etc.).
// -> Once the callback finishes for that element, forEach moves to the next element and repeats the process.
// -> When forEach reaches the end of the array, it finishes execution and returns undefined.

// Syntax:
// array.forEach(callback(currentValue, index, array) {
//  Perform action on each element
// });

const array = [0, 1, 2, 3, 4, 5];

// forEach()
array.forEach((currentElement, index, arr) => {
  console.log(currentElement, index, arr);
});

// Regular function as callback function inside forEach()
array.forEach(function (element) {
  console.log(element);
});

// Arrow function as callback function inside forEach()
array.forEach((element) => {
  console.log(element);
});

// Passing whole function as callback function inside forEach()
function printElement(element) {
  console.log(element);
}
array.forEach(printElement);

// [{}, {}, {}]
const array1 = [
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
  {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  },
];

array1.forEach((element) => {
  console.log(element.key1);
});

// Note
// - The forEach() method accepts a callback function as its argument, which is invoked for each element in the array. The callback function takes three parameters: the current element being processed, the index of the current element, and the array or array-like object being iterated.

// - The forEach() method in JavaScript doesn't return a value itself. Here's a breakdown of why:

// Purpose of forEach()
// - forEach() is designed to execute a provided function once for each element in an iterable object (like arrays).
// - Its primary focus is to perform side effects within the callback function, such as modifying elements, logging information, or triggering other actions.

// Side Effects vs. Returning Values
// - Side effects refer to actions that the callback function might perform within the loop iteration, such as changing values in the array, printing to the console, or making network requests.
// - forEach() itself doesn't return anything after completing the loop. It simply executes the callback function for each element.

// Reasons Why It Doesn't Return
// - Focus on Iteration: The core purpose of forEach() is to iterate and potentially modify the original array or perform actions based on each element. Returning a value wouldn't align with this primary goal.
// - Conciseness and Readability: Keeping forEach() non-returning promotes cleaner code and avoids unintended side effects related to returning values from within the loop.
// - Functional Programming Principles: forEach() aligns with functional programming principles, where functions should ideally avoid mutable side effects and focus on pure transformations.
