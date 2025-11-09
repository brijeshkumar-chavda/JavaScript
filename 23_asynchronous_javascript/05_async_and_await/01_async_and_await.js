// async and await

// What
// - async and await are keywords introduced in ES2017 (ES8) that provide a cleaner, more readable way to work with Promises and manage asynchronous code. They are essentially syntactic sugar built on top of Promises.
// - async: Used to declare an asynchronous function. An async function automatically returns a Promise.
// - await: Used inside an async function to pause execution until a Promise settles (resolves or rejects). It waits for the result of the Promise.

// Why
// - The main purpose is to write asynchronous code that looks and behaves like traditional, easy-to-read synchronous code, avoiding the repetitive chaining of .then() and .catch() callbacks (Promise Chaining). This significantly improves code clarity and simplifies error handling.

// How
// - Declare the function as async: This is mandatory for using await inside it.
// - Use await before any function that returns a Promise: When the runtime encounters await, it pauses the async function, allowing other code to execute, and resumes only after the Promise resolves, returning the resolved value.
// - Use try...catch for error handling: Errors (rejected Promises) are handled just like synchronous errors using standard try...catch blocks.

// Syntax
// Function is marked as async
async function myAsyncFunction() {
  try {
    // await pauses execution until the Promise resolves
    const result = await functionThatReturnsAPromise();
    console.log(result);
  } catch (error) {
    // Standard try/catch handles the rejected Promise
    console.error("An error occurred:", error);
  }
}

// Example
const promise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
      reject("Error fetching data");
    }, 2000);
  });
};

async function consumePromise() {
  try {
    const response = await promise();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();