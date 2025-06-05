// console.log()

// What
// - console.log() is a fundamental JavaScript function used to display output in the console.
// - The console is typically a separate window or pane accessible within a web browser's developer tools or in a Node.js environment.
// - console.log() takes one or more arguments and prints their string representation to the console.

// Why
// - console.log() is primarily used for:
// - Debugging: It allows developers to inspect the values of variables, the flow of execution, and identify errors in their code.
// - Logging Information: You can use it to output messages, status updates, or any relevant information during the execution of your program.
// - Testing: Quickly checking if certain parts of your code are working as expected.
// - Understanding Code Flow: By strategically placing console.log() statements, you can trace the order in which different parts of your code are executed.

// How
// - You call the console.log() function followed by parentheses ().
// - Inside the parentheses, you can pass one or more arguments, separated by commas.
// - JavaScript will convert these arguments to their string representation and display them in the console, separated by spaces.

// Syntax
// console.log(message);
// console.log(variable);
// console.log("String message", variable1, variable2);
// console.log(expression);
// console.log({ name: "John", age: 30 }); // Outputting an object
// console.log([1, 2, 3, 4, 5]);           // Outputting an array

// Example
let userName = "Alice";
let age = 25;
console.log("User's name:", userName); // Outputs: User's name: Alice
console.log("Age:", age);             // Outputs: Age: 25
console.log("User:", userName, "is", age, "years old.");// Outputs: User: Alice is 25 years old.

function add(a, b) {
  let sum = a + b;
  console.log("Inside add function, sum is:", sum);
  return sum;
}
let result = add(10, 5);
console.log("Result of addition:", result);// Outputs: Inside add function, sum is: 15// Outputs: Result of addition: 15

let person = { name: "Bob", city: "New York" };
console.log("Person object:", person);// Outputs (in the console): Person object: { name: 'Bob', city: 'New York' }

let numbers = [100, 200, 300];
console.log("Numbers array:", numbers);// Outputs (in the console): Numbers array: [ 100, 200, 300 ]

// Note
// - console.log() is primarily for development and debugging.
// - You typically wouldn't leave excessive console.log() statements in production code.
// - Most modern browsers provide developer tools (usually opened by pressing F12) where the console is located.
// - Node.js environments also have a console where console.log() output is displayed in the terminal.
// - The console object in JavaScript provides other useful methods like console.error(), console.warn(), console.info(), console.table(), and more for different types of output.

// When
// - Use console.log():
// - When you need to see the value of a variable at a specific point in your code.
// - To verify if a particular block of code is being executed.
// - To output messages to track the program's flow.
// - During the development and debugging process to understand what's happening in your JavaScript code.

// Analogy
// - Think of console.log() as a message you're writing on a piece of paper that only you (the developer) can see while the program is running.
// - It's a way for the program to tell you what's going on inside, the values it's working with, and if anything seems out of the ordinary.
// - Once you've understood what's happening, you might not need all those messages anymore, just like you wouldn't keep all your debugging notes in the final version of your program.
