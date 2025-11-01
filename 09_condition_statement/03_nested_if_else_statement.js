// Topic: Nested If Else statement

// Q. What is Nested If Else statement?
// -> A nested if else statement is an if else statement that is placed inside another if or else block. This structure allows for more complex decision-making processes by enabling multiple layers of conditions to be evaluated, providing different outcomes based on the evaluation of these conditions.

// Example:
let box = true;
let item = true;

if (box) {
  console.log("There is box");
  if (item) {
    console.log("There is item inside the box.");
  } else {
    console.log("There is no item inside the box.");
  }
} else {
  console.log("There is no box");
}
