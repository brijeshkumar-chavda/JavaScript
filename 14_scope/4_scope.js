// Scope

// Note
// - `var` is doesn't support the block scope like `let` and `const` does. Because of that `var` is recommended to not use.

if (true) {
  // Block scope
  var myVar = 1;
  let myLet = 2;
  const myConst = 3;
}

// Global scope
var myVar = 10;
let myLet = 20;
const myConst = 30;

console.log(myVar);
console.log(myLet);
console.log(myConst);
