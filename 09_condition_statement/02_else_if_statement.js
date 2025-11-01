// Topic: Else If statement

// Q. What is Else If statement?
// -> The else if statement in JavaScript is used to specify a new condition to test if the previous if or else if conditions were false. It allows for multiple conditions to be checked sequentially, executing the block of code associated with the first true condition.

// Example:
let bat = true;
let ball = false;

if (bat && ball) {
  console.log("We can play cricket.");
} else if (ball) {
  console.log("We can play catch.");
} else if (bat) {
  console.log("We need ball.");
} else {
  console.log("We can't play today.");
}
