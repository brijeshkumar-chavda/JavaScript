// Class

// What
// - A class in JavaScript is a blueprint for creating objects.
// - It encapsulates data and behavior(methods) that objects created from the class will share.
// - Classes were introduced in ECMAScript 6(ES6) to provide a cleaner and more intuitive way to create and manage objects and their relationships.

// Why
// - Organization: They help organize code by grouping related data and behavior.
// - Reusability: Code can be reused more effectively by creating multiple objects from the same class.
// - Inheritance: They allow for inheritance, where one class can extend another and inherit its properties and methods.
// - Encapsulation: They help encapsulate and hide the complexity of data and behavior within a class.

// Note
// - Class in JavaScript doesn't work like other programming language. It's just a syntactic sugar which look like we are using class but in the background it is using  Constructor Function and Prototype Inheritance.

// Syntax
// 1. Creating class with class declaration
class ClassName {
  constructor(parameter1, parameter2) {
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
  }

  method() {
    console.log(`We are ${this.parameter1} & ${this.parameter2}`);
    console.log("I am method");
  }
}

const instance = new ClassName("argument1", "argument2");
console.log(instance.method());

// 2. Creating class with class expression
const variable = class {
  constructor() {}
};

// Example
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const userOne = new User("userOne", "userone@abc.com", "123");
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

// Behind the Scene
function CreateUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

CreateUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
CreateUser.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user = new CreateUser("user", "user@abc.com", "123");
console.log(user.encryptPassword());
console.log(user.changeUsername());
