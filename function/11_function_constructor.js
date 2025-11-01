// Topic: Function Constructor

// Q. What is Function Constructor?
// -> The Function Constructor is a way to create a new function object at runtime using the built-in global Function constructor, similar to how you create other objects like new Object() or new Array().
// -> It takes a variable number of string arguments: the first arguments are the function's parameter names, and the last argument is a string containing the function body code.

// Q. Why use Function Constructor?
// -> Dynamic Function Creation: It allows you to create functions dynamically based on runtime conditions or user input.
// -> Flexibility: It provides flexibility in scenarios where function definitions need to be generated on-the-fly, such as in code generation tools or dynamic scripting environments.

// Q. How to use Function Constructor?
// -> You call the Function constructor with the new keyword and pass strings for the parameters and body.
// -> The code string provided for the body is parsed and compiled into an executable function object when the constructor is called.

// Syntax:
const functionName = new Function(
  "parameter1",
  "parameter2",
  "return parameter1 + parameter2;"
);

// Note:
// -> Avoid using the Function Constructor whenever possible. It has several disadvantages:
// -> Security Risk: Running code from a string argument is a major security risk (like eval()), as it makes it easy for attackers to execute malicious code.
// -> Performance: The browser engine must parse and compile the string into executable code every time the constructor is called, which is slower than using standard declarations or expressions.
// -> No Closures: Unlike standard functions, a constructor function does not inherit the lexical scope of its creation environment. It only accesses global variables, which limits its utility.

// Analogy:
// -> Using the Function Constructor is like building a machine from a set of instructions written on a note right before you use it.
// -> A Function Declaration is like a pre-built machine already set up in your garage. It's safer, faster, and integrated into its surroundings.