// Constructor Function

// Backstory
// - In other programming language like C++ and Java.
// - We have to create a class then inside the class we need to declare constructor after that we can create an object (Instance/ Object).

// What
// - Yes, in JavaScript, you can create constructor functions without using the class keyword or the constructor keyword. Instead, you can define a regular function and manually assign properties and methods to the newly created object using the this keyword.

function ConstructorFunction(parameter1, parameter2) {
  // left side variable = right side parameter
  this.parameter1 = parameter1;
  this.parameter2 = parameter2;

  this.method = function () {
    console.log(this.parameter1);
    console.log(this.parameter2);
  };
}

const instance = new ConstructorFunction("argument1", "argument2");
console.log(instance.method());
