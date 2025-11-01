// Topic: Switch Statement

// Q. What is Switch statement?
// -> The switch statement in JavaScript is a control flow statement that allows you to execute one block of code among multiple options based on the value of a given expression. It is often used as an alternative to multiple if-else statements when you have several possible values to check against a single variable.

// Example:
let day = 10;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}
