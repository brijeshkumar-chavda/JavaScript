// Function Scope

// Q.What is function scope?
// - Function scope refers to the visibility and accessibility of variables within a function. Variables declared inside a function using the var keyword (prior to ECMAScript 6) or without any explicit declaration (which implicitly creates a global variable) are function-scoped. These variables are only accessible within the function they are defined in, including any nested functions.

// NOTE
// In the example, x and y are function-scoped variables. They are accessible within the function myFunction() and any blocks inside it.

function myFunction() {
  var x = 10;

  if (true) {
    var y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  console.log(x); // Output: 10
  console.log(y); // Output: 20
}

myFunction();
