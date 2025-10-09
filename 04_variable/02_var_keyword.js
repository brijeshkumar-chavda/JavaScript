// `var` Keyword (Not Recommended)

// Note
// - It can be initialized later.
// - It can be reassigned.
// - It can be redeclare in same scope.
// - It can be redeclare in different scope.

// Syntax
// var variableName = value;

// Example
// Initialized later
var variable;
variable = "value";

// Reassigned
var variable = "value1";
variable = "value2";

// Redeclare
// - As you can see your are using same variable name twice.
// - It will take latest updated value.
var variable = "value1";
var variable = "value2";

// How scope works for `var` keyword?

// Function Scope
// - Variables declared with var have function scope.
// - This means they are only accessible within the function where they are declared.
// - If declared outside any function, they have global scope.