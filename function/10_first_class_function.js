// Topic: First Class Function

// Q. What is First Class Function?
// -> In JavaScript, functions are considered "first-class" citizens, It means they can be treated just like any other value.

// Functions can be assigned to variables
const variable = function () {
  return "I am function assigned to variable";
};

// Functions can be stored in data structures
const variable1 = variable;
variable1();

// Functions can be passed as arguments to other functions
function function1() {
  return "I am function1 passed as argument";
}

function function2(function1) {
  return function1();
}

// Functions can be returned as values from other functions
function function3() {
  return function function4() {
    return "I am function4 returned from function3";
  };
}

// Functions can be defined inside other functions (nested functions or closures)
function outerFunction() {
  function innerFunction() {
    return " I am Inner function";
  }
  innerFunction();
}
outerFunction();

// Functions can be invoked immediately (immediately invoked function expressions)
(function () {
  return "I am Immediately Invoked Function Expression";
})();
