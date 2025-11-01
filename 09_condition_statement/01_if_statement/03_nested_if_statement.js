// Topic: Nested if statement

// Q. What is Nested if statement?
// -> A nested if statement is an if statement that is placed inside another if statement. This allows for more complex decision-making processes by enabling multiple layers of conditions to be evaluated.

// Syntax:
const variable1 = true;
const variable2 = true;

if (variable1) {
  console.log("Condition is true.");
  if (variable2) {
    console.log("Nested Condition is true.");
  }
}
