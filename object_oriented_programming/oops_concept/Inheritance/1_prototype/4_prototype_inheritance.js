// Prototype Inheritance

// Q. Why add method using prototype property?
// - To check how the prototype inheritance work. When we add the method using `prototype` property it in constructor function and create the object. Those object will not have the method directly in them. But they can still access it by using the `__proto__`. This show the how prototype inheritance chain work.

// https://youtu.be/vXnUn2UkSJI

// Creating constructor function (Without constructor keyword)
let ConstructorFunction = function (para1, para2) {
  this.para1 = para1;
  this.para2 = para2;
};

// Adding method in construction function using the prototype property
ConstructorFunction.prototype.function1 = function () {
  console.log(this.para1, this.para2);
};

// Creating object
const object = new ConstructorFunction("value1", "value2");
console.log(object);
