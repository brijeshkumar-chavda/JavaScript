// Private Property and Method

// What
// - Private properties and methods are properties and methods that are not accessible from outside the class.

// How
// - Private properties and methods are defined using the # (hash) symbol before the property or method name.

// Note
// - Private variable should be declare at a class level.
// - It use # symbol to create a private property and method.
// - These variable doesn't use let or const keyword because they property of instance which is created from the class. For example property of object are also not declare with the let or const keyword. Only regular variable are declare with the let and const keyword.

// Syntax
class Class1 {
  #privateProperty;
  constructor() {
    this.#privateProperty = "I am Private Property";
  }

  #privateMethod() {
    console.log("I am Private Method");
  }
}
