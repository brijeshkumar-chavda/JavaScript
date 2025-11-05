// Getter & Setter

// What
// - Getter & Setter are the method. Which are used to get and set the value of a property.

// How
// - Before setting up the value you can validate the value for some cases using thr setter method.
// - Before getting the value you can calculate the value for some cases using thr getter method.

// Syntax

class Class1 {
  constructor(parameter1, parameter2) {
    this.variable1 = parameter1;
    this.variable2 = parameter2;
  }

  get variable1() {
    return this._variable1.toUpperCase();
  }

  set variable1(value) {
    if (!value) {
      console.warn("Please pass the value");
      return;
    }
    this._variable1 = value;
  }
}

const instance1 = new Class1("abc", "def");
console.log(instance1.variable1);

// Example
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // Always add `return` keyword in get.
  get password() {
    return this._password.toUpperCase();
  }

  // - This set method is overriding the constructor's password.
  // - Don't add `return` keyword in set.
  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const userOne = new User("abc@gmail.com", "abcd");
console.log(userOne.password);
