// Topic: Prototype

// Q. What is Prototype?
// -> In programming world there are different ways to write the code. This is know as a programming paradigm.
// -> JavaScript use prototype-based programming paradigm which is a type of object-oriented programming (OOP).
// -> Other programming languages like Java, C++ use class-based programming paradigm.

// Inheritance:
// - Concept: A mechanism where a new object (child) acquires properties and methods from an existing object (parent).
// - Purpose: Code reuse and creating hierarchical relationships between objects.
// - Mechanism: In JavaScript, primarily achieved through the prototype chain.

// __proto__:
// - Objects have a special hidden property which is __proto__
// - This will be either null or references another object.
// - This __proto__ property is set by the JavaScript engine.

// Prototype:
// - The referred object in the __proto__ property is known as prototype.

// Prototype Chain:
// - Mechanism: A linked list of objects where each object inherits properties and methods from its prototype.
// - Structure: Every object has a __proto__ property pointing to its prototype.
// - Process: When a property is accessed on an object, the JavaScript engine first checks the object itself, then its prototype, and so on until the end of the chain or the property is found.

// Prototype Inheritance:
// - When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

// Q. Why need prototype?
// -> The prototype system allows JavaScript to implement inheritance and to share properties and methods across instances.
// -> This makes code reuse and object - oriented programming possible in JavaScript.

// Q. How prototype chain works in general?
// parentObject is prototype.
const parentObject = {
  name: "Parent",
};

// __proto__ is the hidden property in childObject that store the parent object.
const childObject = {
  __proto__: parentObject,
  name: "Child",
};

console.log(childObject.name);
console.log(childObject.__proto__.name);

// Q. How prototype chain works in object?
// Object <- [Prototype + Inheriting] <- Parent Object <- [Prototype + Inheriting] <- Grand Parent Object

// Q. How prototype chain works in array?
// Array <- [Prototype + Inheriting] <- Object <- .length == array.prototype.length == array.length

// Note:
// -> If you wondering what will you get at the end of this prototype inheritance chain is `null`.
