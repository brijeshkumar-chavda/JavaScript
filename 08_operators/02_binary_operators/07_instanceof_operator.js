// Topic: `instanceof` Operator

// Q. What is the `instanceof` operator in JavaScript?
// -> The instanceof operator checks if an object is an instance of a specific constructor. In simpler terms, it verifies if an object was created using a particular constructor function.

// Q. Why use the `instanceof` operator?
// -> Type Checking: It helps ensure objects are of the expected type, especially in object-oriented programming. This can prevent errors that might arise when using objects of the wrong type.
// -> Conditional Logic: We can use instanceof in conditional statements to perform actions based on the object's type. For example, checking if an object is a Person before accessing its name property.
// -> Inheritance Verification: In object-oriented programming with inheritance, you can use instanceof to verify if an object inherits from a specific base class.

// Q. How does the `instanceof` operator work?
// -> The instanceof operator works by examining the object's prototype chain. Every object in JavaScript has a prototype, which is another object used as a blueprint for properties and methods. The instanceof operator checks if the constructor function's prototype appears anywhere in the object's prototype chain.

// Note:
// -> instanceof only checks the constructor function used to create the object, not the object's actual type (which is always "object" in JavaScript).
// -> Modifying the prototype chain after object creation can affect the result of instanceof.

// Syntax:
// object instanceof constructor

// Example:
function ConstructorFunction(parameter1, parameter2) {
  this.variable1 = parameter1;
  this.variable2 = parameter2;
}

let object = new ConstructorFunction("value1", 123);
console.log(object instanceof ConstructorFunction); // Output: true (object is an instance of ConstructorFunction)

let randomVariable = 10;
console.log(randomVariable instanceof ConstructorFunction); // Output: false (randomVariable is not an instance of ConstructorFunction)
