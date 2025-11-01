// Inheritance

// Backstory
// - Do you remember we are using the __proto__ (Prototype) to connect two object to share parent object properties and method for child object.
// - We are doing same thing here. Just form of class and extends keywords. It's syntactic sugar.
// - Like how we create object using the object literal, here we are using class to create object (Fancy name is "instance").
// - Now extending so called class to another class via `extends` keyword === __proto__

// Syntax
class ParentClass {
  parentMethod() {
    console.log(`I am parent class method`);
  }
}

// Child class inheriting from ParentClass using the extends keyword
class ChildClass extends ParentClass {
  childMethod() {
    console.log(`I am child class method`);
  }
}

const instance = new ChildClass("Child");
console.log(instance.parentMethod());
console.log(instance.childMethod());
