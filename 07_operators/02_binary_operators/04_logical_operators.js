// Topic: Logical Operators

// Q. How && (AND) works?
// -> true && false = false
// -> false && true = false
// -> true && true = true
// -> false && false = false

// Example:
let variable1 = true;
let variable2 = false;
if (variable1 && variable2) {
  console.log("Both are true");
} else {
  console.log("At least one is false");
}

// Q. How || (OR) works?
// -> true || false = true
// -> false || true = true
// -> true || true = true
// -> false || false = false

// Example:
let variable3 = true;
let variable4 = false;
if (variable3 || variable4) {
  console.log("At least one is true");
} else {
  console.log("Both are false");
}

// Q. How ! (NOT) works?
// -> !true = false
// -> !false = true

// Example:
let variable5 = true;
if (!variable5) {
  console.log("Variable5 is false");
} else {
  console.log("Variable5 is true");
}
