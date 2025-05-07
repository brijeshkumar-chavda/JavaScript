// Comment

// What
// - Comments in JavaScript are explanatory notes added to your code that are ignored by the JavaScript engine.
// - They are used to make your code more understandable for yourself and other developers.

// Why
// - Comments in JavaScript are essential for:
// - Readability: Making your code easier to follow and comprehend.
// - Explanation: Describing the purpose and logic behind specific code sections.
// - Documentation: Providing lightweight documentation for functions, variables, and code blocks.
// - Debugging: Temporarily disabling code to isolate issues.
// - Future Reference: Reminding yourself or others about specific implementation details or future tasks.

// How
// - JavaScript supports two main ways to write comments:
// - Single-line comments: Start with `//` and continue until the end of the line.
// - Multi-line comments: Enclosed between `/` and `/`, allowing them to span multiple lines.

// Syntax
// This is a single-line comment in JavaScript.

/*
This is a
multi-line comment
in JavaScript.
It can span across several lines.
*/

// Example
// This variable stores the user's name.
let userName = "Alice";

/*
This function takes a name as input
and prints a greeting to the console.
*/
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser(userName); // Call the greetUser function.

// TODO: Implement input validation for the userName variable.

// Note
// - Keep your comments concise and up-to-date with your code.
// - Avoid over-commenting obvious code. Focus on explaining the "why" rather than the "what."
// - Use meaningful variable and function names to reduce the need for extensive comments.
// - Tools like linters and formatters can sometimes help enforce comment styles.

// When
// - To explain complex or non-obvious logic.
// - To document the purpose and parameters of functions.
// - To describe the functionality of code blocks.
// - To mark areas that need future attention (`TODO`, `FIXME`).
// - To temporarily disable code during debugging.
// - When you anticipate that someone (including your future self) might struggle to understand the code's intent.

// Analogy
// - Think of comments in JavaScript as little notes you write in the margins of a book. The JavaScript engine reads the book (your code) but completely ignores your notes. However, these notes are invaluable for anyone else (or you later) trying to understand the story (the logic) and the characters (variables and functions) within the book. They provide context, explanations, and reminders that make the entire reading experience much clearer.