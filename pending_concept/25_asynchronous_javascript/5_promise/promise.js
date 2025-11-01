// Promise

// What
// - A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// -  It's a way to handle asynchronous code in a more structured and readable way than traditional callbacks.

// Why
// - Improved code readability: Promises help to avoid callback hell, making code more maintainable.
// - Error handling: Provides a structured way to handle errors in asynchronous operations.
// - Chaining: Allows for sequential execution of asynchronous operations.

// How
// - A Promise can be in one of three states:
// - Pending: Initial state, neither fulfilled nor rejected.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.
// - You create a Promise using the Promise constructor, which takes an executor function as an argument.
// - The executor function receives two functions: resolve and reject.
// - You call resolve when the operation is successful, passing the result as an argument.You call reject when the operation fails, passing the error as an argument.

// Syntax

// Basic Promise Creation
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If successful:
  resolve(result);
  // If unsuccessful:
  reject(error);
});

// Chaining Promise
myPromise
  .then((result) => {
    // Handle successful result
    return anotherPromise; // Return another Promise for chaining
  })
  .then((result2) => {
    // Handle result from the second Promise
  })
  .catch((error) => {
    // Handle errors from any of the Promises
  });

// Error Handling
myPromise
  .then((result) => {
    // Handle successful result
  })
  .catch((error) => {
    // Handle errors
  });

// Promise.all()
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Handle successful results
  })
  .catch((error) => {
    // Handle errors from all Promises
  });

// Promise.race()
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    // Handle the result from the first Promise that resolves
  })
  .catch((error) => {
    // Handle errors
  });

// Example
const promise1 = new Promise(function (resolve, reject) {
  // Do async task like a database call, cryptography & network etc.

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "test user", email: "abc@example.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;

    if (!error) {
      resolve({ username: "test user", email: "abc@example.com" });
    } else {
      reject("ERROR: Something went wrong ");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise has been resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "test user 2", email: "abc@example.com" });
    } else {
      reject("ERROR: test 2 went wrong ");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5();

// async function getAllUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/iambrijeshtoo");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error");
//   }
// }

// getAllUser();

fetch("https://api.github.com/users/iambrijeshtoo")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally();
