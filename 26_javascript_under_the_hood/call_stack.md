# Call Stack

What

- A callback is a function that is passed as an argument to another function. It's a way to defer the execution of a function until a certain event occurs or a condition is met.

Why

- Function Calls: Keeps track of the order of function calls and their return addresses.
- Execution Context: Stores information about each function call, including local variables, arguments, and the return address.

How

- Function Call: When a function is called, its execution context is pushed onto the call stack.
- Execution: The function's code is executed.
- Return: When the function returns, its execution context is popped off the stack, and the returned value is passed back to the calling function.

Example

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

function main() {
  greet("Alice");
  console.log("Main function finished.");
}

main();
```

Call Stack:

- main function is called.
- main's execution context is pushed onto the stack.
- greet is called within main.
- greet's execution context is pushed onto the stack.
- greet executes and returns.
- greet's execution context is popped off the stack.
- main continues execution.
- main's execution context is popped off the stack.

Note

- The call stack plays a crucial role in managing the flow of execution in JavaScript. Understanding the call stack is essential for debugging and understanding how functions are called and return values.

Analogy

- Think of the call stack as a stack of plates. The most recently added plate is the top plate, and it's the first one to be removed when you need a plate. Similarly, in JavaScript, the most recent function call is at the top of the stack, and it's the first one to be removed when the function returns.
