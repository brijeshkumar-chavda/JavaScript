// Topic: Prototype Part 2

// Modifying Origin Object Prototype:
// Adding the custom method to the JavaScript Origin Object
Object.prototype.customMethod = function () {
  console.log("I am the origin object's custom method.");
};

const childObject = {
  key: "value",

  method: function () {
    console.log("I am the child object's method");
  },
};

// Accessing method from child object
console.log(childObject.method());

// Accessing custom method from origin object because of prototype
console.log(childObject.customMethod());

// Because of the custom method is in origin object. You can access it form any where.
const array = [1, 2, 3, 4, 5];
console.log(array.customMethod());

// __proto__:
// -> __proto__ is property in object to set other object as a property.
// -> Prototype is name for theory discussion.
// -> __proto__ is name for actual code.

const grandFather = {
  grandFatherCar: "Doge Charger 1960",
};

const father = {
  fatherCar: "BMW M3 GTR",
  //   __proto__: grandFather,
};

const child = {
  childCar: "Hot wheels",
  //   __proto__: father,
};

// console.log(child.grandFatherCar);
// console.log(child.fatherCar);
// console.log(child.childCar);

// Modern Syntax (Recommended):
// Setting up the prototype chain using Object.setPrototypeOf
Object.setPrototypeOf(father, grandFather);
Object.setPrototypeOf(child, father);

console.log(child.grandFatherCar);
console.log(child.fatherCar);
console.log(child.childCar);
