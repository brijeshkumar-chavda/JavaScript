// __Proto__

// Q. What is proto?
// - In JavaScript, `__proto__` (double underscore proto double underscore) is a reference to the prototype of an object. It is an internal property that allows objects to inherit properties and methods from their prototype.
// - Every object in JavaScript has a `__proto__` property, which points to its prototype object. The prototype object itself may have its own `__proto__` property, creating a chain of prototypes known as the prototype chain.
// - When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object itself. If it doesn't find it, it then looks at the object's prototype (`__proto__`) and continues searching up the prototype chain until it finds the desired property or method or reaches the end of the chain.

// EXAMPLE

// Prototype object
const prototypeObject = {
  fun() {
    console.log("I am prototype object");
  },
};

// Object inheriting from the prototype
const obj = {
  key1: "value1",
};

// Setting the prototype of 'dog' to 'animalPrototype'
obj.__proto__ = prototypeObject;

// Accessing property from the prototype
console.log(obj.name);

// Accessing method from the prototype
obj.fun();
