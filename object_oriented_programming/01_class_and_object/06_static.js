// Static

// What
// - Static is a keyword in JavaScript used to define static methods and properties for a class.
// - Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

// Why
// - Static methods and properties are used when you want to create functions or data that are not tied to any specific instance of a class.

// How
// - You can define a static method or property by using the static keyword inside a class definition.

// Syntax
class ClassName {
  static variable = "I am static variable";
  static method() {
    console.log(`I am static method`);
  }
}

console.log(ClassName.method());

// Example
class User {
  static company = "ABC Company";

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static createId() {
    return `123`;
  }

  getUsername() {
    console.log(`Username: ${this.username}`);
  }
}

const userOne = new User("userOne");
// console.log(userOne.createId());
console.log(User.createId());
