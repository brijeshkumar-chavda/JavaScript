// `var` Keyword (Not Recommended)

// Syntax
// var variableName = value;

// Initialized later
var variable;
variable = "value";

// Redeclare
// - As you can see your are using same variable name twice. But for value it will take latest updated value.
var variable = "value1";
var variable = "value2";

// Reassigned
var variable = "value1";
variable = "value2";

// Note
// - It can be initialized later.
// - It can be redeclare.
// - It can be reassigned.
// - It has global scope.
// - The var keyword is not recommended for modern JavaScript development. It has been deprecated and replaced with let and const. Using var can lead to unexpected behavior and bugs in your code.
